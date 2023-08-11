// Esto sólo en los módulos nativos
// que no tienen promesas nativas

// const { promisify } = require('node:util')
// const readFilePromise = promisify(fs.readFile)

const fs = require('node:fs/promises')

console.log('🐼 Reading the first file...')
fs.readFile('./archivo1.txt', 'utf-8')
  .then(text => {
    console.log('1st text:', text)
  })

console.log('\n😀 Do things while reading the file...\n')

console.log('🦄 Reading the second file...')
fs.readFile('./archivo2.txt', 'utf-8')
  .then(text => {
    console.log('2do text:', text)
  })
