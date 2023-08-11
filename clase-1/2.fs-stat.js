const fs = require('node:fs') // a partir de Node 16, se recomienda poner node:

const stats = fs.statSync('./archivo1.txt')

console.log(
  stats.isFile(), // si es un fichero
  stats.isDirectory(), // si es un directorio
  stats.isSymbolicLink(), // si es un enlace simbólico
  stats.size // tamaño en bytes
)
