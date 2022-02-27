// esta forma es sincrónica y lo que se ve acá es como se leen y escriben los archivos con estas funciones 

const {readFileSync, writeFileSync} = require('fs');
console.log('start')
// const fs = require('fs');
// fs.read... esto es lo mismo que arriba

//ejemplo de lectura de archivos
const first = readFileSync('./content/first.txt',"utf-8")

const second = readFileSync('./content/second.txt',"utf-8")

console.log(first,second)


//ejemplo de escritura de archivo
//si el archivo no está, node lo creará y si existe, node lo sobreescribirá
writeFileSync('./content/result-sync.txt',`Here is the result: ${first}, ${second}`,{flag: 'a'}) //el tercer parámetro es opcional, lo que hará flag: 'a' será duplicar el resultado en el mismo archivo

console.log('done with this task')
console.log('starting the next one')