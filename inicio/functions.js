document.addEventListener('DOMContentLoaded', function() {
    window.scrollTo(0, 0);
    actualizarUsuario();

    
  const userDropdown = document.getElementById('userDropdown');
  const btnLogout = document.getElementById('logoutBtn');
  const btnIcon = document.getElementById('btnIcon');

  

btnLogout.addEventListener('click', function(){
    localStorage.removeItem('nombreUsuario');
    window.location.href = '../index.html';
})



btnIcon.addEventListener('click', function(){
    userDropdown.style.display = userDropdown.style.display === 'none' ? 'block' : 'none';
})
});


  document.addEventListener("DOMContentLoaded", function() {
    const navbar = document.querySelector('.navBar');
    const itemsMobile = document.querySelector('.items-mobile');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 0) {
            navbar.classList.add('fixed-nav');
            itemsMobile.classList.add('items-mobile-fixed');
        } else {
            navbar.classList.remove('fixed-nav');
            itemsMobile.classList.remove('items-mobile-fixed');
        }
    });
});

document.addEventListener('DOMContentLoaded', function(){
    let burgerButton=document.querySelector('.burger button');
    let navItems=document.querySelector('.items-mobile');
     
    burgerButton.addEventListener('click',function(){
        let esVisible=navItems.style.display==='block';
        navItems.style.display= esVisible ? 'none' : 'block' ;     
})
})

function actualizarUsuario() {
    const nombreUsuario = localStorage.getItem('nombreUsuario');
    const apellidoUsuario = localStorage.getItem('apellidoUsuario');
    if (nombreUsuario && apellidoUsuario) {
      const contenedorUsuario = document.getElementById('nombreUsuario');
      
      contenedorUsuario.textContent = nombreUsuario + " " +apellidoUsuario;
      document.getElementById('usuario').style.display = 'flex';
      document.getElementById('registrarse').style.display = 'none';
    }
  }

const carrusel = document.querySelector('.carrusel-items');
const imagenes = Array.from(carrusel.getElementsByClassName('carrusel-item'));

let interval = null;
const velocidad = 1;
const getMaximo = () => carrusel.scrollWidth - carrusel.clientWidth;
let maximo = getMaximo();

// Clonar las primeras y últimas imágenes
imagenes.forEach(imagen => {
    const cloneFirst = imagen.cloneNode(true);
    const cloneLast = imagen.cloneNode(true);
    carrusel.appendChild(cloneFirst);
    carrusel.insertBefore(cloneLast, imagenes[0]);
});

const play = () => {
    if (interval !== null) clearInterval(interval);
    interval = setInterval(() => {
        carrusel.scrollLeft += velocidad;

        if (carrusel.scrollLeft >= maximo) {
            carrusel.scrollLeft = imagenes[0].clientWidth; // Salta al primer clon
        } else if (carrusel.scrollLeft <= 0) {
            carrusel.scrollLeft = maximo - imagenes[0].clientWidth; // Salta al último clon
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

carrusel.addEventListener('mouseover', stop);
carrusel.addEventListener('mouseout', play);

const cambiarFoto = (direccion) => {
    const anchoImagen = imagenes[0].clientWidth;
    let nuevaPosicion = carrusel.scrollLeft;
    if (direccion === 'izquierda') {
        nuevaPosicion -= anchoImagen;
        if (nuevaPosicion < 0) {
            carrusel.scrollLeft = maximo - imagenes[0].clientWidth; // Salta al último clon
            return;
        }
    } else {
        nuevaPosicion += anchoImagen;
        if (nuevaPosicion > maximo) {
            carrusel.scrollLeft = imagenes[0].clientWidth; // Salta al primer clon
            return;
        }
    }
    carrusel.scroll({
        left: nuevaPosicion,
        behavior: 'smooth'
    });
    stop();
    setTimeout(play, 6000);
};

const flechaIzquierda = document.getElementById('flecha-izquierda');
const flechaDerecha = document.getElementById('flecha-derecha');

flechaIzquierda.addEventListener('click', () => {
    cambiarFoto('izquierda');
});
flechaDerecha.addEventListener('click', () => {
    cambiarFoto('derecha');
});

play();
