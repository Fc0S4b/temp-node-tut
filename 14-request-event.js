const http = require("http"); //se importa el modulo http
//función que se invocará cada vez que alguien lo solicite al servidor
// const server = http.createServer((req,res)=>{
//    res.end('Welcome')
//})

//otro método es usar una api emisor de eventos

//Using Event Emitter API
const server = http.createServer();
// emits request event
//se puede:
//subscribe to it / listen for it /respond to it
//en doc de node. js eventos de la clase http.server se puede ver que uno de ellos es request, y hay más para ver su funcionalidad que se extienden a eventEmitter

//en vez de usar callback, usamos los métodos on y end

server.on("request", (req, res) => {
  res.end("Welcome");
});

server.listen(5000);
