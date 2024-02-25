(async () => {
  const b = await import('./b.mjs')
  console.log('argv[1]', process.argv[1])
  console.log(b.default())
})()
