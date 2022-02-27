//Modules
//accedo a los elementos exportados definiendo variables que usan la función require para acceder a los módulos externos
const names = require('./4-names'); //si es extensión js se puede omitir
const sayHi = require('./5-utils');
// se importa de 6-alternative-flavor los datos a exportar, de esta forma se mostrará en conjunto los resultados
const data  = require('./6-alternative-flavor')

//estos resultados 
//console.log(data) esto era parte de la lección antes de crear el archivo 7
// sin tener que asignar esta importación, se exportará la función de 7-mind-grenade.js ya que los nodos que usan requires en módulos con funciones se ejecutan si o si
require('./7-mind-grenade')

//esto era parte de la lección antes de crear el archivo 7
// sayHi('susan')
// sayHi(names.john)
// sayHi(names.peter)

//el código corre pese a tener los módulos separados