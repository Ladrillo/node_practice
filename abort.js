const { once, EventEmitter } = require('events')
const ee = new EventEmitter

const ac = new AbortController
const { signal } = ac

ee.once(ee,'close', (message) => {
  console.log('dis clozedz: ', message)
})

ee.emit('close', 'ARGHH')
ee.emit('close', 'ARGHH')
ee.emit('close', 'ARGHH')

let counter = 1000
let timer = setTimeout(() => {
  console.log('time is up')
}, counter)

process.stdin.setEncoding('utf8')

once(process.stdin.on, 'data', data => {
  console.log(`dis the data --> ${data}`)
})
async function foo () { console.log('end') }
foo()
