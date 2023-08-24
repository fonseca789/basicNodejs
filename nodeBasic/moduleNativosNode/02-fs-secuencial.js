const fs = require('node:fs')

const text = fs.readFileSync('./notasCursoBasicNode.txt', 'utf-8');

console.log(text); 

// todo esto es secuencial
