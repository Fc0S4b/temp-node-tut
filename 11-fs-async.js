// esta forma es asincrónica 

const {readFile, writeFile} = require('fs'); //ya no llevan Sync los métodos

console.log('start')
readFile('./content/first.txt','utf8',(err,result)=>{ //el tercer parámetro es un callback, el segundo es utf8 para que el contenido del txt se traduzca con carácteres en utf8
    if(err){
        console.log(err)
        return
    }
    //console.log(result) el código hasta acá mostraría el contenido de first.txt, ya que no hizo caso al if de err porque no hay errores, ahora comento esto para seguir trabajando el contenido del texto y volver a leer el segundo contenido para finalmente pasar ambos contenidos a un nuevo texto

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
//se creará el archivo result-async.txt con el contenido de first.txt y second.txt

//necesitamos proveer una callback, básicamente significa que ejecutamos esa callback cuando terminamos, ejemplo cuando agregamos un addEvenListener a un botón, se agrega cualquier evento que se vaya a escuchar cuando se haga click con el botón y luego pasar el evento a una función callback, esa callback se ejecutará cada vez que se hace click en el botón

//esta es una callback del infierno