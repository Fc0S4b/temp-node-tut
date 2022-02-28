//acá .listen en asincrónico, mantendrá el servidor dando respuestas 

const http = require('http')

const server = http.createServer((req, res)=>{
    console.log('request event')
    res.end('Hello World')
})

server.listen(5000, ()=>{
    console.log('Server listening on port : 5000...')
})