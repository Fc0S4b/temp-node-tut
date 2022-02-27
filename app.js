// npm - global command, comes with node
// npm --version //comando para ver la versión de npm si es que está instalado, este se instala con node.js

//npm es un gestor de paquetes de node, un paquete, módulo o dependencia es como un archivo.js reutilizable, código javascript que se usa para integrarlo al proyecto, ejemplo "quiero agregar una barra deslizante y alguien más hizo el código, busco ese paquete compartido y lo integro a la app"

//se puede instalar de dos formas un paquete: local y globalmente:

//local dependency - use it only in this particular project
//npm i <packageName>

//gloabl dependency -use it in any project
//npm install -g <packageName>
//sudo npm install -g<packageName> (mac)

//package.json -manifest file (stores important info about project/package)
//3 formas de crear un package.json: 
//manual approach (create package.json in the root, create properties, etc) mas lento
//npm init (step by step, press enter to skip)
//npm init -y (everything default) //forma rápida de hacer el package.json sin tener que ir paso a paso como el comando anterior

//al crear un packcage.json, este irá registrando los paquetes que iré descargando e instalando en la app, este registro irá en el objeto de dependecies. Un paquete puede tener sus propios paquetes y por ende descargarlos por si solo como por ejemplo bootstrap que descarga sus propias dependencias de dist, js y scss

//un ejemplo de como usar una dependencia
const _ = require('lodash'); //cargo las herramientas que ofrece el paquete lodash en una variable llamada _

const items = [1, [2,[3,[4]]]] //defino unos items para realizar alguna acción

const newItems = _.flattenDeep(items); // creo nuevos items o una nueva acción tomando los items como parámetro de una función de lodash al que se accede con _.nombre de Propiedad
console.log(newItems); //esto se verá al ejecutar node app.js que retornará en [1,2,3,4]