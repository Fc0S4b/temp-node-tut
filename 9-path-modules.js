const path = require("path")

console.log(path.sep)

const filePath = path.join('/content/','subfolder','test.text')

console.log(filePath)

const base = path.basename(filePath)
console.log(base)

const absolute = path.resolve(__dirname,'content', 'subfolder','test.text');
console.log(absolute)

//para qué sirve esto? pues al usar rutas que indiquen algún recurso, estas cambian de acuerdo al entorno, entonces se necesita ir actualizando las rutas por ejemplo, mi ruta en la máquina local será diferente a una ruta que use heroku (una especie de host de aplicaciones)

//para ejecutar esto escribe en la terminal node 9-path-modules.js