const fs = require('node:fs')

const stats = fs.statSync('./notasCursoBasicNode.txt');

console.log(
    stats.isFile(), // si es fichero
    stats.isDirectory(), // si es un Directorio
    stats.isSymbolicLink(), // si es un enlace simbolico
    stats.size // en bytes
);