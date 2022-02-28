// npm - global command, comes with node
// npm --version //comando para ver la versión de npm si es que está instalado, este se instala con node.js

//npm es un gestor de paquetes de node, un paquete, módulo o dependencia es como un archivo.js reutilizable, código javascript que se usa para integrarlo al proyecto, ejemplo "quiero agregar una barra deslizante y alguien más hizo el código, busco ese paquete compartido y lo integro a la app"

//se puede instalar de dos formas un paquete: local y globalmente:

//local dependency - use it only in this particular project
//npm i <packageName>

//global dependency -use it in any project
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
console.log("hola")
//al cargar la app en un repositorio github, esto se puede hacer omitiendo los node_modules para que no sea tan pesada la app, desde github y descargar el repositorio obviamente en ese momento no se tendrán los node_modules pero esto se soluciona ejecutando npm install para instalar todas las dependencias que especifica el package.json

//también se pueden crear dependencias de desarrollador, con el comando npm i nodemon -D ó npm i nodemon --save-dev, nodemon es un módulo de ejemplo, puede ser otro ¿y para que sirve esto? la pregunta es, se necesita nodemon en producción? en la otra dependencia? No, porque cuando se sube la app a heroku o digitalocean, por supuesto que se necesitará un módulo más serio que nodemon para reiniciar la app, por ejemplo pm2. Que otras dev dependencies se pueden agregar? por ejemplo paquetes de testeo, como lenting o formater (no sé si está bien escrito)- El punto es que resulta mejor declarar las dependencias con paquetes que usará la app no con paquetes que se usan en el desarrollo de esta.

//el objeto script del package.json ejecuta comandos automáticamente, por ejemplo una propiedad que se llama "start": "node app.js", significa que si escribo en consola npm start, se ejecutará node app.js lo que abrirá la aplicación. el segundo es un "dev": "nodemon app.js", este lo ejecuto escribiendo con "npm run dev" y lo que hará será ejecutar nodemon app.js, lo que hace nodemon es mostrar lo que hace la app.js en vivo y se actualiza cada vez que se hace cambios (el último console.log("hola") se escribió para esto). Una forma de mezclar ambas propiedades es definiendo "start": "nodemon app.js". Estos comandos son comunes al trabajar con react para ver los cambios o reacciones del código. Para parar el nodemon con ctrl + c para cancelar el proceso en consola

//como desinstalar un paquete: npm uninstall bootstrap (como ejemplo bootstrap) pero para hacerlo de forma manual, se tiene que eliminar la carpeta node_modules, eliminar la dependencia de package.json y eliminar el archivo de package-lock.json y luego ejecutar npm install. Se instalarán los node_modules y el package-lock.json de forma limpia

//la instalación global con npm install -g <packageName> se usa cuando se necesita usar un comando de forma global, por ejemplo si tipeo node app.js, el comando global sería node, pero si tipeo nodemon app.js tendría un error de que no se encuentra el comando (solo es local). Instalar modulos de forma global sirve para gestionar varias aplicaciones sin tener que estar instalándo de forma local en cada una esos módulos. Sin embargo, a veces hay bugs por tener instalaciones globales, entonces se puede ejecutar de forma global un módulo sin tener que instalarlo afuera, esto es con npx. React por ejemplo tiene un comando para crear una app que invoca npx antes: "npx create-react-app my-app"

//el package-lock.json sirve para realizar un seguimiento de la versión exacta de cada paquete que se instala para que un producto sea 100% reproducible de la misma manera incluso si los paquetes son actualizados por sus encargados: 
//si escribes ~0.13.0 solo desea actualizar las versiones de parches 0.13.1 esta bien, pero 0.14.0 no.
//si escribes ^0.13.0 desea actualizar el parche y las versiones menores a 0.13.1, 0.14.0 etc.
//si escribes 0.13.0, esa es la versión exacta que se utilizará, siempre