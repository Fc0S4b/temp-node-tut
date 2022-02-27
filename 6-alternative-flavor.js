//lo que se hace aquí alternativamente es crear un objeto que exporta items y también se agrega otra propiedad de nombre person, con nombre de propiedad singlePerson. El objeto exportado se vería así {items: ['item1','item2'], singlePerson: {name: 'bob'}}

module.exports.items = ['item1', 'item2'];


const person = {
    name: 'bob'
}

module.exports.singlePerson = person