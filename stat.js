const fs = require('fs')
const path = require('path')

// const streamjs = fs.readFileSync(path.join(__dirname, './stream.js'))

const info = fs.statSync(path.join(__dirname, './stream.js'))

console.log(info.ctime.toLocaleDateString())
