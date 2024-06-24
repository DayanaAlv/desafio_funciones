// Variables globales para almacenar colores
let currentColor = ''; // Inicialmente no tiene ningún color asignado

// Obtener los elementos por su ID
const azul = document.getElementById("azul");
const rojo = document.getElementById("rojo");
const verde = document.getElementById("verde");
const amarillo = document.getElementById("amarillo");
const keyDiv = document.getElementById("key");

// Agregar evento click a cada div para cambiar al color negro
azul.addEventListener("click", function() {
    azul.style.backgroundColor = 'black';
});

rojo.addEventListener("click", function() {
    rojo.style.backgroundColor = 'black';
});

verde.addEventListener("click", function() {
    verde.style.backgroundColor = 'black';
});

amarillo.addEventListener("click", function() {
    amarillo.style.backgroundColor = 'black';
});

// Agregar evento de teclado para cambiar el color del div "key"
document.addEventListener("keydown", function(event) {
    if (event.key === 'a') {
        currentColor = 'pink';
    } else if (event.key === 's') {
        currentColor = 'orange';
    } else if (event.key === 'd') {
        currentColor = 'skyblue';
    } else if (event.key === 'q') {
        createColorBox('purple');
    } else if (event.key === 'w') {
        createColorBox('gray');
    } else if (event.key === 'e') {
        createColorBox('brown');
    }

    keyDiv.style.backgroundColor = currentColor;
});

// Función para crear un nuevo div con color específico
function createColorBox(color) {
    const newDiv = document.createElement('div');
    newDiv.style.width = '200px';
    newDiv.style.height = '200px';
    newDiv.style.backgroundColor = color;
    newDiv.style.margin = '10px';
    newDiv.style.display = 'inline-block';
    newDiv.style.cursor = 'pointer';
    document.body.appendChild(newDiv);
}