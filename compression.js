const { createGzip } = require('zlib')

const tr = createGzip()

tr.on('data', data => {
  console.log(`We gotz dataz: ${data.toString('base64')}`)
})
tr.write('Lady Gaga Rocks!')
tr.end('Das itz folkz')
