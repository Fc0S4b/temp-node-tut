//http example
var http = require("http");
var fs = require("fs");

http
  .createServer(function (req, res) {
    // const text = fs.readFileSync('./content/big.txt','utf8')
    // res.end(text)
    const fileStream = fs.createReadStream("./content/big.txt", "utf8");
    fileStream.on("open", () => {
      fileStream.pipe(res); //método pipe actúa como un canalizador del stream, una llave de la tubería en el flujo de datos que se leen
    });
    fileStream.on("error", (err) => {
      //manejo del error
      res.end(err);
    }); //con fileStream se mostrarán los datos en fragmentos
  })
  .listen(5000);

//se verá TODO el contenido del archivo en el localhost:5000 si se activa lo que esta comentado y no se añade lo siguiente dentro de createServer
