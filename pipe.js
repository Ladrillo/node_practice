console.log(process.stdin.isTTY ? 'terminal' : 'piped')

console.log('Current Directory', process.cwd())
console.log('Process Platform', process.platform)
console.log('Process ID', process.pid)


process.stdin.pipe(process.stdout)

