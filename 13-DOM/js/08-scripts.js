const navegacion = document.querySelector('.navegacion');

console.log(navegacion)
console.log(navegacion.childNodes) // Los espacios en blanco son considerados elementos
console.log(navegacion.children) //Los espacios en blanco son considerados elementos

console.log(navegacion.children[1].nodeName)
console.log(navegacion.children[1].nodeType)

const card = document.querySelector('.card');
card.children[0].src = 'img/hacer3.jpg'
console.log(card.children[0]);


//Traversing the Hijo al padre

console.log(card.parentElement.parentElement.parentElement)


console.log(card.nextElementSibling)

const ultimoCard=document.querySelectorAll('card.')