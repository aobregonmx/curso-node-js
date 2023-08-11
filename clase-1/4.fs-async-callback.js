const fs = require('node:fs')

console.log('🐼 Reading the first file...')
fs.readFile('./archivo1.txt', 'utf-8', (err, text) => { // <---- ejecutas este callback
  console.log('1st text:', text)
})

console.log('\n🤟 Do things while reading the file...\n')

console.log('🦄 Reading the second file...')
fs.readFile('./archivo2.txt', 'utf-8', (err, text) => {
  console.log('2do text:', text)
})
