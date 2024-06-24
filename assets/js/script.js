// // Función para cambiar el color de fondo al hacer click
// function pintar(elemento, color = 'green') {
//     elemento.style.backgroundColor = color;
// }

// // Obtener el elemento por su ID
// const ele = document.getElementById("ele1");

// // Agregar evento click al elemento
// ele.addEventListener("click", function() {
//     pintar(ele, 'yellow'); 
// });
    
function pintar (event, color = 'green') {
    event.target.style.backgroundColor=color;

}

const ele= document.getElementById("ele1");
ele.addEventListener ("click", function(event) {
    pintar (event, 'yellow');
});



