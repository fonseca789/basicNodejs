
import { readFile } from "node:fs/promises";

Promise.all([
  readFile('./notasCursoBasicNode.txt', 'utf8'),
  readFile('./otroarchivo.txt', 'utf8'),

]).then (
  ([text, secondText]) => {
    console.log('Archivo 1', text)
    console.log('Archivo 2', secondText)
  }
)
