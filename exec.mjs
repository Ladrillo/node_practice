import { exec } from 'node:child_process'

// exec(
//   'git status',
//   (err, stdout, stderr) => {
//     console.log('1', 'err', err)
//     console.log('2', stdout.toString())
//     console.log('3', stderr.toString())
//   }
// )

// async function main() {
const { stdout, stderr } = await exec('git status')
console.log('A', stdout)
console.log('B', stderr)
// }

stderr.on('error', (stuff) => {
  console.log('stuff', stuff)
})
// main()
