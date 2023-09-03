const http = require('node:http') 
const fs = require('node:fs')

const addPort = process.env.PORT ?? 1234 // aca estoy agregado un puerto
const proccessResquest = ((req,res) => {        //con esta funtion estoy separando el proceso de respuesta
    const url = req.url;
    res.setHeader('Content-Type', 'text/html; charset=utf-8')
    if(url == '/') {
        res.statusCode= 200 // ok
        res.end('<h1>Bienvenido a mi página</h1>');
    }
        else if(url == '/image.png') {
            fs.readFile('./1.png', (error,data) =>{
                if(error) {
                    res.statusCode= 500
                    res.end('<h1>Error al Cargar image</h1>')
                }
                else {
                    // console.log(data)
                    // res.statusCode= 200
                    res.setHeader('Content-Type', 'image/png');
                    res.end(data)
                }
            })
        }
    else if(url =='/contants') {
        res.statusCode= 200 // ok
        res.end('<h1>Contantos</h1>');
    }
    else {
        res.statusCode= 404
        res.end('<h1>404</h1>')
    }
})

const server= http.createServer(proccessResquest) // se crea el Servidor 
server.listen(addPort, () => {
    console.log(`Server Listening on Port http:localhost:${addPort}`)
})