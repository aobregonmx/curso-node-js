// Esto sólo en los módulos nativos
// que no tienen promesas nativas

// const { promisify } = require('node:util')
// const readFilePromise = promisify(fs.readFile)

import { readFile } from 'node:fs/promises'

console.log('🐼 Reading the first file...')
const text = await readFile('./archivo1.txt', 'utf-8')
console.log('1st text:', text)

console.log('\n😀 Do things while reading the file...\n')

console.log('🦄 Reading the second file...')
const secondText = await readFile('./archivo2.txt', 'utf-8')
console.log('2do text:', secondText)
