//este es un ejemplo de cuando a pesar de que la operación asincrónica tenga tiempo 0, igual entra a la segunda pila y pasa por un eventloop hasta que se desocupa la primera pila por lo que el orden de los procesos sera: first, third, second

//started operating system process
console.log('first')

setTimeout(()=> {
    console.log('second')
}, 0)

console.log('third')

//completed and exited operating system process
