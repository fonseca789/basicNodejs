const http = require ('node:http')
const dittoJSON = require('./pokemon/ditto.json');
const { log } = require('node:console');

const addPort = process.env.PORT ?? 1234

const proccessResquest = (req,res) => {
    const {method, url } = req;
    switch (method) {
        case 'GET': 

            switch (url) {
                case '/pokemon/ditto' :
                    res.setHeader('Content-Type', 'aplication/json; charset=utf-8')
                    return res.end(JSON.stringify(dittoJSON));
                default:
                    res.statusCode= 404
                    res.setHeader('Content-Type', 'text/html; charset=utf-8')
                    return res.end('<h1>404</h1>')
            }
        case 'POST': 
            switch (url) {
                case '/pokemon' :{
                    let body= '';
                    
                    //lee lo que va llegado a de data
                    req.on('data', chunk => {
                        body += chunk.toString()
                    })
                    req.on('end', ()=> {
                        const data =JSON.parse(body)
                        console.log(data);
                        //llamar a una base de datos para guardar info
                        res.writeHead(201, { 'Content-Type': 'application/json; charset=utf-8'})
                        data.time = '18:30'
                        res.end(JSON.stringify(data));
                    })
                    break
                }

                default:
                    res.statusCode= 404
                    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
                    return res.end('404 Not Found')
            }
            
        
                
    }
    return 
}

const server= http.createServer(proccessResquest);

server.listen(addPort, () =>{
    console.log(`Server Listening on Port http:localhost:${addPort}`);
})