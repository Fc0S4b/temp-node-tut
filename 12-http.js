const http = require('http');

const server = http.createServer((req, res)=>{ //primer parámetro representa una solicitud y el segundo una respuesta a la solicitud

    //console.log(req) esto muestra el objeto req al actualizar la página ya que el servidor está esperando la solicitud (el request) localhost:5000 pero para poder ver la url hay que pedirle al objeto esa propiedad =>

    if(req.url === '/'){ // si la solicitud de url es igual al home page que es un /
        res.end('Welcome to our home page')
    } 

    if(req.url ==='/about'){
        res.end('Here is our short history')
    }
    
    res.end(
        `<h1>Oops!</h1>
       <p>We can't seem to find the page you are looking for</p>
       <a href="/">back home</a> `
    )

//res.write('Welcome to our home page'); una prueba antes de escribir las sentencias if para ver lo que muestra el servidor
//res.end()


})

server.listen(5000) //que puerto va a estar escuchando el servidor