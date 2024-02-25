const { Readable, Writable } = require('stream')
const { WriteStream, createReadStream } = require('fs')

// const dis = createReadStream(__filename)

// dis.on('data', data => console.log(data.toString('utf8')))
// dis.on('end', data => console.log('\n\n\ndis end'))

let buffer = Buffer.from('Lady Gaga')
const dat = new Readable({
  encoding: 'utf8',
  // objectMode: true,
  read() {
    if (!buffer.length) {
      this.push(null)
    } else {
      this.push(buffer.slice(0, 1))
      buffer = buffer.slice(1, buffer.length)
    }
  }
})

dat.on('data', data => console.log(data))
dat.on('end', data => console.log('\n\ndis end'))
