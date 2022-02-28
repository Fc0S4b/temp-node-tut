//este ejemplo parte con una función asincrónica por lo que primero se verá el log "I will run first" y después cada dos segundos se mostrará hello world.

setInterval(()=> {
    console.log('hello world')
}, 2000)

console.log(`I will run first`)

//process stays alive unless
//kill process control + C
//unexpected error