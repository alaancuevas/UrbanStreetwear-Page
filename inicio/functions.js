document.addEventListener('DOMContentLoaded', function(){
    let burgerButton=document.querySelector('.burger button')
    let navItems=document.querySelector('.items-mobile')
     
    burgerButton.addEventListener('click',function(){
        let esVisible=navItems.style.display==='block'
        navItems.style.display= esVisible ? 'none' : 'block'      
})
})

const carrusel = document.querySelector('.carrusel-items');
let interval = null;
let velocidad = 1;

// Actualizar `maximo` para que refleje la máxima posición de scroll hacia la derecha
const getMaximo = () => carrusel.scrollWidth - carrusel.clientWidth;

let maximo = getMaximo();

const play = () => {
   if (interval !== null) clearInterval(interval); // Limpiar el intervalo anterior si existe
   interval = setInterval(function(){
    carrusel.scrollLeft += velocidad;

    if (carrusel.scrollLeft >= maximo) {
        velocidad *= -1; // Cambia la dirección del scroll
        carrusel.scrollLeft = maximo; // Corrige si se pasa del máximo
    } else if (carrusel.scrollLeft <= 0) {
        velocidad *= -1; // Cambia la dirección del scroll
        carrusel.scrollLeft = 0; // Corrige si es menor que cero
    }
   }, 10);
};

const stop = () => {
    if (interval !== null) {
        clearInterval(interval);
        interval = null;
    }
};

// Asegurarse de que `maximo` está siempre actualizado
window.addEventListener('resize', () => {
    maximo = getMaximo();
});

carrusel.addEventListener('mouseover', () =>{
    stop();
})
carrusel.addEventListener('mouseout', () =>{
    play();
})

play();