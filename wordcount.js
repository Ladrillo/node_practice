const { createReadStream } = require('fs')
const { writeFile } = require('fs/promises')
const { Transform } = require('stream')

const NO_PUNCTUATION = /[^\w\s]|_/g
const NO_MULTI_SPACE = /\s+/g

function cleanString(str) {
  const rawString = str.toString()
  const lowerCase = rawString.toLowerCase()
  const noPunctuation = lowerCase.replace(NO_PUNCTUATION, " ")
  const noMultiSpace = noPunctuation.replace(NO_MULTI_SPACE, " ")
  const words = noMultiSpace.split(' ')
  return words
}

const wordCount = path => {
  const cache = new Map

  const getWords = new Transform({
    objectMode: true,
    transform(chunk, enc, next) {
      const words = cleanString(chunk)
      words.forEach(word => this.push(word))
      next()
    }
  })

  const countWords = new Transform({
    objectMode: true,
    transform(word, enc, next) {
      cache.set(word, (cache.get(word) || 0) + 1)
      next()
    }
  })

  countWords.on('finish', async () => {
    let entries = Array.from(cache.entries())
      .sort((a, b) => b[1] - a[1])
    let result = ``
    for (let entry of entries) {
      result += `${entry[0]} ==> ${entry[1]}\n`
    }
    await writeFile('./word-count.txt', result)
  })

  createReadStream(path)
    .pipe(getWords)
    .pipe(countWords)
}

wordCount('./elquijote.txt')
