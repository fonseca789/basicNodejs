import {readFile} from 'node:fs/promises'

console.log("Aca leemos el Primer Archivo");
const text = await readFile ('./notasCursoBasicNode.txt', 'utf-8');
console.log(text);
console.log("----->> Hacemos otras cosas mientra lee archivo");

console.log("Leyendo el Second Archivo");
const secondText = await readFile("./otroarchivo.txt", "utf8");
console.log('Segundo Archivo: ', secondText);

console.log("aca hiendo otras operacions ", 4 + 5);
