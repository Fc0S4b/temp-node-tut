const { readFile } = require("fs");

//este código no daría problemas así de simple, el problema vendría con leer múltiples archivos

// readFile('./content/first.txt', 'utf8', (err, data)=>{
//     if(err){
//         return;
//     }
//     else{
//         console.log(data)
//     }
// })

//una solución sería usar una promesa configurando de forma asíncrona y con await
const getText = (path) => {
  return new Promise((resolve, reject) => {
    readFile(path, "utf8", (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

//se llama la función con parámetro de una ruta del archivo, luego se maneja el resultado con then y el error con catch

// getText("./content/first.txt")
//   .then((result) => console.log(result))
//   .cath((err) => console.log(err));

//con await puedo hacer que espere la promesa hasta que se resuelva
//las funciones siguientes son creadas desde cero para el ejemplo, pero estas funciones se encuentran en librerias
//la idea es crear una función asincrónica y atarle un await

// creo una función que espera a que la promesa se resuelva y manejo la respuesta y el error con try y catch
// const start = async() =>{
//     try{
//     const first = await getText('./content/first.txt');
//     console.log(first)
//     } catch (error){
//         console.log(error)
//     }
// }

// start()

//refactorizando promise
//la idea era leer dos archivos y crear y escribir en uno nuevo con una forma más limpia que lo que se ven en fs-async-patterns

const start = async () => {
  try {
    const first = await getText("./content/first.txt"); //alt+shift+flecha abajo para copiar hacia abajo una línea
    const second = await getText("./content/second.txt");
    console.log(first, second);
  } catch (error) {
    console.log(error);
  }
};

start();
