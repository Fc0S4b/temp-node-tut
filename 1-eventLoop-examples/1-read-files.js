
//esta ejemplo de asincróncio también ocupa un event loop ya que primero ejecuta el log de start, luego pasa la función asincrónica readFile y se sale del callstack para continuar con la petición en otra pila, luego de que es resuelta esa petición se pasa a una pila callstack queue en donde la función eventLoop se encarga de tomar esa respuesta desde esa pila una vez que la pila original se haya liberado. Entonces ejecuta el primer log start, luego la función pasa a la pila y se cambia de pila, el siguiente log se ejecuta "starting next task", se vacía la pila y entra el log de "done with this task"
 

const {readFile, writeFile} = require('fs'); 

console.log('start')
// CHECK FILE PATH!!!! verificar la ruta ya que es un ejemplo copiado del archivo de fs-async.js
readFile('./content/first.txt','utf8',(err,result)=>{ 
    if(err){
        console.log(err)
        return
    }

    const first = result;
    readFile('./content/second.txt','utf8',(err,result)=>{
    if(err){
        console.log(err)
        return
    }
    
    const second = result;
    writeFile("./content/result-async.txt",`Here is the result: ${first}, ${second}`,(err,result)=>{
        if(err){
            console.log(err)
            return;
        }
        console.log('done with this task')
    })
})

})

console.log('starting next task')
