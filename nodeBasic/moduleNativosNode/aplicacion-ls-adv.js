const fs = require('node:fs');

const folder = process.argv[2] ?? '.'
fs.readdir(folder, (error, files) =>{
    if(error) {
        console.error('Error al Leer Directorio ', error);
        return ;
    }
    files.forEach(file =>  {
        console.log(file);
    })
})