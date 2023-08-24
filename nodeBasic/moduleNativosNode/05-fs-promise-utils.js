const fs = require('node:fs/promises');

console.log("Aca leemos el Primer Archivo");
fs.readFile("./notasCursoBasicNode.txt", "utf-8").then (
    text => {
        console.log('Primer Archivo: ', text);
    }
);
console.log("Hacemos otras cosas mientra lee archivo");

console.log("Leyendo el Second Archivo");
fs.readFile("./otroarchivo.txt", "utf8").then (text => {
    console.log('Segundo Archivo: ', text);
})

console.log("aca hiendo otras operacions ", 4 + 5);
