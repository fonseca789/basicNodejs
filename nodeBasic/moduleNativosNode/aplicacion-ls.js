const fs = require('node:fs');

fs.readdir('.', (error, files) =>{
    if(error) {
        console.error('Error al Leer Directorio ', error);
        return ;
    }
    files.forEach(file =>  {
        console.log(file);
    })
})