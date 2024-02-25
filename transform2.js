const { Transform } = require('stream')

const doubler = new Transform({
  objectMode: true,
  transform(chunk, enc, next) {
    let doubled = chunk * 2
    next(null, doubled)
  }
})

doubler.on('data', data => {
  console.log(`data came in: ${data.toString()}`)
})

function gaga() {}

module.exports = { doubler, gaga }
