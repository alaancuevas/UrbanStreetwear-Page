document.addEventListener('DOMContentLoaded', function() {
    window.scrollTo(0, 0);
  });

  document.addEventListener("DOMContentLoaded", function() {
    const navbar = document.querySelector('.navBar');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 0) {
            navbar.classList.add('fixed-nav');
        } else {
            navbar.classList.remove('fixed-nav');
        }
    });
});

document.addEventListener('DOMContentLoaded', function(){
    let burgerButton=document.querySelector('.burger button');
    let navItems=document.querySelector('.items-mobile');
     
    burgerButton.addEventListener('click',function(){
        let esVisible=navItems.style.display==='block';
        navItems.style.marginTop = '51px';
        navItems.style.display= esVisible ? 'none' : 'block' ;     
})
})


const carrusel = document.querySelector('.carrusel-items');
const imagenes= carrusel.getElementsByClassName('carrusel-item');

let interval = null;
let velocidad = 1;
const getMaximo = () => carrusel.scrollWidth - carrusel.clientWidth;

let maximo = getMaximo();

const play = () => {
   if (interval !== null) clearInterval(interval); 
   interval = setInterval(() => {
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

carrusel.addEventListener('mouseover',() =>{
    stop();
});
carrusel.addEventListener('mouseout', () => {
    play();
});


const cambiarFoto = (direccion) =>{
    const anchoImagen= imagenes[0].clientWidth;
    let nuevaPosicion;
    if(direccion === 'izquierda'){
        nuevaPosicion = carrusel.scrollLeft - anchoImagen;
    }else{
        nuevaPosicion = carrusel.scrollLeft + anchoImagen;
    }
    carrusel.scroll({
        left:nuevaPosicion,
        behavior:'smooth'
    });
    stop();
    setTimeout(play, 6000);
};

const flechaIzquierda  = document.getElementById('flecha-izquierda');
const flechaDerecha= document.getElementById('flecha-derecha');

flechaIzquierda.addEventListener('click', () =>{
  cambiarFoto('izquierda');
});
flechaDerecha.addEventListener('click', () => {
    cambiarFoto('derecha');
});

play();

