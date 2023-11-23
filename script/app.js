const botonMenuOculto = document.querySelector('button');
console.log(botonMenuOculto);
const menuOculto = document.querySelector('.links')
console.log(menuOculto)
// botonMenuOculto.addEventListener('click', () =>{
//     menuOculto.style.display = 'block' 
// })

botonMenuOculto.addEventListener('click', function(){
    if(menuOculto.style.display === 'none' || menuOculto.style.display === ''){
        menuOculto.style.display = 'block';
    } else {
        menuOculto.style.display = 'none';
    }

});






// // script.js
// const toggleButton = document.getElementById('toggleButton');
// const parrafo = document.getElementById('parrafo');

// toggleButton.addEventListener('click', function() {
//     if (parrafo.style.display === 'none' || parrafo.style.display === '') {
//         parrafo.style.display = 'block';
//     } else {
//         parrafo.style.display = 'none';
//     }
// });
