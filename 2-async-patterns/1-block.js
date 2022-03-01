//un código de bloqueo sería el loop for dentro del if de /about. Lo que hará la operación es que al momento de tener las páginas abiertas, ya sea de home, about y error Page, ninguna de las tres podrá estar liberada antes de que se termine el loop for. Es por esto también que se prefiere una funcion asincrónica

const http = require('http')

const server = http.createServer((req,res)=>{
if(req.url === '/'){
    res.end('Home Page')
}
if(req.url === '/about'){
    //BLOCKING CODE!!!
    for (let i=0; i<1000;i++){
        for(let j=0; j<1000; j++){
            console.log(`${i} ${j}`)
        }
    }
    res.end('About Page')
}

res.end('Error Page')
})

server.listen(5000, ()=>{
    console.log('Server Listening on port 5000...')
})