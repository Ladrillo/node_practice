const { readFile } = require('fs')
const meh = require('./meh.js')
console.log(process.argv)
console.log(__filename)
readFile(__filename, (err, contents) => {
  if (err) {
    console.error(err)
    return
  }
  console.log(contents.toString())  
  // console.log(meh())
})
// import { fileURLToPath } from 'url'
// import { dirname } from 'path'
// const __filename = fileURLToPath(import.meta.url)
// const __dirname = dirname(__filename)

// console.log(import.meta.url)
// console.log(__filename, __dirname)
