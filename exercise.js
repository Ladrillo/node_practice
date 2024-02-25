const { Transform, Readable } = require('stream')
const { createWriteStream } = require('fs')

const read = string => {
  let chars = Array.from(string)
  return new Readable({
    read() {
      if (chars.length) {
        this.push(chars[0])
        chars = chars.slice(1)
      } else {
        this.push(null)
      }
    }
  })
}
const transform = () => new Transform({
  transform(chunk, enc, next) {
    let char = chunk.toString()
    let result = char == char.toUpperCase()
      ? char.toLowerCase()
      : char.toUpperCase()
    next(null, result)
  }
})
const write = () => {
  return createWriteStream('./caseShenanigans.txt')
}

let writer = write()
let transformer = transform()

read('Whatever, BOOMER! You SUCK. YeS')
  .on('end', () => {
    writer.write('\n')
  })
  .pipe(transformer)
  .pipe(writer)
