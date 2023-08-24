
const fs = require('node:fs/promises');
const path = require('node:path');
const pc = require('picocolors');



const folder = process.argv[2] || '.'
async function ls (folder) {
    let files
    try {
        files = await fs.readdir(folder)
    } catch  {
        console.error(pc.red(`❌ No se pudo leer el Directorio ${folder}`));
        process.exit(1)
    }

    const filesPromises = files.map(async file => {
        const filePath = path.join(folder, file)
        let stars;
        try {
            stars = await fs.stat(filePath) // status - information
        } catch{
            console.error(pc.red(`❌ No se pudo leer el archivo ${filePath}`))
            process.exit(1)
        }
        const isDirectory = stars.isDirectory();
        const fileType = isDirectory ? 'd' : 'f'
        const fileSize = stars.size + ` Byte`;
        const fileModified = stars.mtime.toLocaleString();

        return `${pc.white(fileType)} ${pc.blue(file.padEnd(40))} ${pc.green(fileSize.toString().padStart(10))} ${pc.yellow(fileModified)} `;
    })

    const filesInfo = await Promise.all(filesPromises)

    filesInfo.forEach(fileInfo => console.log(fileInfo))
}
ls(folder);