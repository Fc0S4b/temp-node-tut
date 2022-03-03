//STREAMS

//las secuencias se utilizan para leer o escribir secuencialmente por ejemplo una fuente continua o una transmisión de archivos grandes es muy útil.
//hay 4 tipos diferentes de streams:
//Writeable : escribir datos secuencialmente
//Readable : leer datos secuencialmente
//Duplex : leer y escribir datos secuencialmente
//Transform : los datos pueden ser modificados al escribir o leer

//muchos módulos incorporados en el nodo implementan interfaz de stream y lo que también es interesante es que extiende la clase de emisores de eventos lo que simplemente significa que podemos usar eventos como datos y luego como flujos

//que pasa cuando los archivos empiezan a ser cada vez mas grandes y estos son asignados a una variable para leerlos de forma sincrónica

//15-create-a-big-file.js

const { createReadStream } = require("fs");

const stream = createReadStream("./content/big.txt");

stream.on("data", (result) => {
  //evento data
  console.log(result);
});

//se mostará el archivo por fragmentos de tamaño máximo de 64 kb, el big.txt es de 16 kb asi que mostrará un solo fragmento de 16 kb
// en la clase fs.ReadStream estan los eventos "close", "open", "ready", "readStream.bytesRead", etc

//default 64 kb //fragmento que lee por defecto
// last buffer -remainder //mas un resto al final

//highWaterMark - control size // un objeto parámetro para cambiar el tamaño del buffer o el fragmento

//const stream = createReadStream('./content/big.txt',{highWaterMark : 90000}) //así se escribiría de ejemplo
//const stream = createReadStream('../content/big.txt', {enconding: 'utf8})// se puede agregar la codificación a utf8 en el mismo objeto de highWaterMark ({highWaterMark:90000, enconding: 'utf8'}). El primer parámetro tiene un error en el path (en la ruta), tiene dos puntos, por lo que se puede acceder a un evento 'error' para manejar el error:

stream.on("error", (err) => console.log(err));
