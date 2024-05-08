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
const getMaximo = () => carrusel.scrollWidth - carrusel.clientWidth;

let maximo = getMaximo();

const play = () => {
   if (interval !== null) clearInterval(interval); 
   interval = setInterval(function(){
    carrusel.scrollLeft += velocidad;

    if (carrusel.scrollLeft >= maximo) {
        velocidad *= -1; 
        carrusel.scrollLeft = maximo; 
    } else if (carrusel.scrollLeft <= 0) {
        velocidad *= -1; 
        carrusel.scrollLeft = 0; 
    }
   }, 10);
};

const stop = () => {
    if (interval !== null) {
        clearInterval(interval);
        interval = null;
    }
};
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