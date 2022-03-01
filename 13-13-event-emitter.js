//Event-Driven Programming
// es la programación escrita en base a los eventos (un evento como onClick, focus, etc) esto también es visible desde el lado del servidor

//creamos una constante que se llame EventEmitter,que es una clase y hay dos opciones, si quieres crear algo personalizado tendrás que extender la clase o si simplemente quieres emitir un evento además de escucharlo, entonces puedes solo crear la instancia

const EventEmitter = require("events");

const customEmitter = new EventEmitter();
//hay dos métodos interesantes en este objeto (hay muchos mas) que son : on-listen para un evento y emit para emitir un evento

//creamos response que es la variable que alojará el evento emitido y una función callback

customEmitter.on("response", () => {
  console.log(`data recieved`);
});

//lo que se ejecute en la callback se almacenará en response y este se podrá emitir con emit:
customEmitter.emit("response");

//lo de arriba es una configuración básica
//ahora 3 cosas
// puede haber más de una escucha para emitir una respuesta:

// const EventEmitter = require("events");

// const customEmitter = new EventEmitter();

// customEmitter.on("response", () => {
//   console.log(`data recieved`);
// });
// customEmitter.on("response", () => {
//   console.log(`some other logic`);
// });

// customEmitter.emit("response");

//segundo: el orden importa, si se emite antes de escuchar no se guardará la emision (nada saldrá en consola)

// customEmitter.emit("response");
// const EventEmitter = require("events");
// const customEmitter = new EventEmitter();

// customEmitter.on("response", () => {
//   console.log(`data recieved`);
// });
// customEmitter.on("response", () => {
//   console.log(`some other logic`);
// });

//tercero: podemos pasar los argumentos cuando estamos emitiendo el evento

// const EventEmitter = require("events");

// const customEmitter = new EventEmitter();

// customEmitter.on("response", (name, id) => { //en la callback se usan los parámetros que se emiten
//   console.log(`data recieved user ${name} with id: ${id}`);  //para usarlos en la lógica de la callback
// });
// customEmitter.on("response", () => {
//   console.log(`some other logic`);
// });

// customEmitter.emit("response", 'john',34); //aca se pasan dos parámetros adicionales john y 34

//una gran cantidad de módulos integrados se basan en eventos
