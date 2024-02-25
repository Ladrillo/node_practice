import { Transform, pipeline } from 'stream'
import { createReadStream, createWriteStream } from 'fs'

class ChunkToLineTransform extends Transform {
  remaining = ''
  _transform(chunk, enc, next) {
    let text = this.remaining + chunk
    let lines = text.split('\n')
    this.remaining = lines.pop()
    lines.forEach(line => {
      this.push(line + '\n')
    })
    next()
  }
  _flush(next) {
    if (this.remaining) this.push(this.remaining)
    next()
  }
}

const readStream = createReadStream('./input.csv', { encoding: 'utf8', highWaterMark: 1024 })
const writeStream = createWriteStream('./output.csv')
const onlyCategory = category => new Transform({
  objectMode: true,
  transform(line, enc, next) {
    console.log(line)
    let regex = new RegExp(category)
    if (line == 'ID,Name,Price,Category\n') this.push(line)
    else if (regex.test(line.split(',')[3])) this.push(line)
    next()
  }
})

const textToLines = new ChunkToLineTransform({ encoding: 'utf8' })

pipeline(
  readStream,
  textToLines,
  onlyCategory('Electronics'),
  writeStream,
  err => {
    if (err) console.log(`Pipeline failed: ${err.message}`)
    else console.log('Pipeline succeeded.\n')
  }
)
