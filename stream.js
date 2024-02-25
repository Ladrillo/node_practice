const { Readable, Writable } = require('stream')
const fs = require('fs')

// const makeStream = () => {
//   const data = ['a', 'bb', 'ccc']
//   // return new Readable({
//   //   objectMode: true,
//   //   read() {
//   //     if (!data.length) this.push(null)
//   //     else this.push(data.shift())
//   //   }
//   // })
//   return Readable.from(data)
// }

// const str = makeStream()

// str.on('data', (data) => {
//   console.log('ohh, some data -->' , data)
// })
// str.on('end', () => {
//   console.log('it iz donez')
// })

// const writable = fs.WriteStream('./here')

// writable.on('finish', () => console.log('finish event'))

// for (let i = 0; i < 10; i++) {
//   writable.write('x\n')
// }
// writable.end('das itz')

const makeWritableStream = () => {
  let data = []
  return new Writable({
    decodeStrings: false,
    // objectMode: true,
    write(chunk, enc, next) {
      data.push(chunk)
      console.log(data)
      next()
    }
  })
}

const writable = makeWritableStream()
writable.on('finish', () => console.log('das it for writing'))
writable.write('a')
writable.write('b')
writable.write('c')
// writable.write(1)
writable.end('d')
