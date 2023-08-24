const fs = require("node:fs");

console.log("Aca leemos el Primer Archivo");
fs.readFile("./notasCursoBasicNode.txt", "utf-8", (error, text) => {
  console.log(text);
});
console.log("Hacemos otras cosas mientra lee archivo");

console.log("Leyendo el Second Archivo");
fs.readFile("./otroarchivo.txt", "utf8", (error, text) => {
  console.log(text);
});

console.log("aca hiendo otras operacions ", 4 + 5);
