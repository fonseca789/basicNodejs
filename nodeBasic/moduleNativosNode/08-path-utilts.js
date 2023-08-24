const path =require('node:path');

//muestra la barra que usa tu SO
console.log(path.sep)

//unir rutas de forma correcta
const filePath = path.join('content', 'subconten', 'test.txt');
console.log(filePath);
console.log('-------------')

//return el nombre de la base
const basePath = path.basename('/temp/archivoSecret/password.txt');
console.log(basePath);
//returna solo la base sin .ext
const filename = path.basename('/temp/archivo-secret/password.txt', '.txt');
console.log(filename);

// traer .ext
const extension= path.extname('hola.que.tal.imagen.jpg');
console.log(extension)

