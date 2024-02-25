const { createWriteStream } = require('fs')
const { Writable } = require('stream')

// const writable = createWriteStream('./dumpz')

// writable.on('finish', () => console.log('das it writing'))

// Array.from('Lady Gaga Rocks').forEach(char => {
//   writable.write(char + '\n')
// })

// writable.end('\nnothin more to end\n')

const writableMaker = data => new Writable({
  objectMode: true,
  // encoding: 'utf8',
  write(chunk, enc, next) {
    data.push(chunk)
    next()
  }
})

const dump = []

const writable2 = writableMaker(dump)

writable2.on('finish', () => {
  console.log('das the data on finish -->', dump)
})

Array.from('Lady Gaga Rocks').forEach(char => {
  writable2.write(char)
})

writable2.end('nothing more to end')
