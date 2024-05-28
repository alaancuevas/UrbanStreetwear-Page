const contenedorProductos = document.getElementById('container-productos');
const productos = [
    {
        idProducto : 1,
        imagen: "/product-images/remeraOversize.jpg",
        logo: "/images/urbanLogoNegro.png",
        nombre: "Remera Oversize",
        precio: "$18000"
    },
    {
        idProducto : 2,
        imagen: "/product-images/jeanMom.jpg",
        logo: "/images/urbanLogoNegro.png",
        nombre: "*Jeans* Mom",
        precio: "$37000"
    },
    {
        idProducto : 3,
        imagen: "/product-images/canguroOversize.jpg",
        logo: "/images/urbanLogoNegro.png",
        nombre: "Hoodie Oversize",
        precio: "$42000"
    },
    {
        idProducto : 4,
        imagen: "/product-images/conjuntoSyR.jpg",
        logo: "/images/urbanLogoNegro.png",
        nombre: "Short & Remera",
        precio: "$35000"
    },
    {
        idProducto : 5,
        imagen: "/product-images/gorras.jpg",
        logo: "/images/urbanLogoNegro.png",
        nombre: "Gorras planas",
        precio: "$19000"
    }, {
        idProducto:6,
        imagen: "/product-images/campera.jpg",
        logo: "/images/urbanLogoNegro.png",
        nombre: "Campera inflable",
        precio: "$102000"
    },
    {
        idProducto: 7,
        imagen: "/product-images/zapatillas.jpg",
        logo: "/images/urbanLogoNegro.png",
        nombre: "Zapatillas Air Jordan",
        precio: "$200000"
    },
    {
        idProducto: 8,
        imagen: "/product-images/joggerCargo.jpg",
        logo: "/images/urbanLogoNegro.png",
        nombre: "Jogger Cargo",
        precio: "$35000"
    },
    {
        idProducto: 9,
        imagen: "/product-images/bermudajersey.jpg",
        logo: "/images/urbanLogoNegro.png",
        nombre: "Bermuda Jersey",
        precio: "$27000"
    },
    {
        idProducto: 10,
        imagen: "/product-images/camisetaBaseball.jpg",
        logo: "/images/urbanLogoNegro.png",
        nombre: "Camiseta NY Yankees",
        precio: "$53000"
    }, {
        idProducto: 11,
        imagen: "/product-images/buzo.jpg",
        logo: "/images/urbanLogoNegro.png",
        nombre: "Buzo c/redondo",
        precio: "$38000"
    },
    {
        idProducto: 12,
        imagen: "/product-images/jeanSlim.jpg",
        logo: "/images/urbanLogoNegro.png",
        nombre: "Jeans Slim Fit",
        precio: "$43000"
    },
    {
        idProducto: 13,
        imagen: "/product-images/jeanCargo.jpg",
        logo: "/images/urbanLogoNegro.png",
        nombre: "Jeans Cargo",
        precio: "$48000"
    },
    {
        idProducto: 14,
        imagen: "/product-images/remeraOso.jpg",
        logo: "/images/urbanLogoNegro.png",
        nombre: "Remera Bear OVSZ",
        precio: "$22000"
    },
    {
        idProducto: 15,
        imagen: "/product-images/morral.jpg",
        logo: "/images/urbanLogoNegro.png",
        nombre: "Morral Basic",
        precio: "$16000"
    }, {
        idProducto: 16,
        imagen: "/product-images/pescador.jpg",
        logo: "/images/urbanLogoNegro.png",
        nombre: "Piluso Pescador",
        precio: "$12000"
    },
    {
        idProducto: 17,
        imagen: "/product-images/vans.jpg",
        logo: "/images/urbanLogoNegro.png",
        nombre: "Vans SK8-HI",
        precio: "$150000"
    },
    {
        idProducto: 18,
        imagen: "/product-images/camuflado.jpg",
        logo: "/images/urbanLogoNegro.png",
        nombre: "Jogger Camuflado",
        precio: "$38000"
    },
    {
        idProducto: 19,
        imagen: "/product-images/gorro.jpg",
        logo: "/images/urbanLogoNegro.png",
        nombre: "Gorro Billabong",
        precio: "$21000"
    },
    {
        idProducto: 20,
        imagen: "/product-images/champion.jpg",
        logo: "/images/urbanLogoNegro.png",
        nombre: "Buzo Champion blanco",
        precio: "$45000"
    },
    {
        idProducto: 21,
        imagen: "/product-images/universitaria.jpg",
        logo: "/images/urbanLogoNegro.png",
        nombre: "Campera Universitaria",
        precio: "$83000"
    }
    
]

const productosPorPagina = 9;
let paginaVista = 1;

function mostrar(pagina) {
    contenedorProductos.innerHTML = '';
    const inicio = (pagina - 1) * productosPorPagina;
    const fin = pagina * productosPorPagina;
    productos.forEach((producto, indice) => {
        if (indice >= inicio && indice < fin) {
            let content = document.createElement('div');
            content.innerHTML = `
                <div class="producto">
                    <div class="foto-producto">
                        <img src="${producto.imagen}" alt="">
                    </div>
                    <div class="descripcion-producto">
                        <img src="${producto.logo}" alt="logo urban">
                        <h2>${producto.nombre}</h2>
                        <h3>${producto.precio}</h3>
                        <div class="agregar"><button class="agregar-al-carrito" data-idProducto="${producto.idProducto}">Comprar</button></div>
                    </div>
                </div>
            `;
            contenedorProductos.appendChild(content);
        }
    });

    actualizarEstadoBotones();
}

function pasarPagina() {
    const prevNext = document.getElementById('prev-next');
    const botonAnterior = prevNext.querySelector('.anterior');
    const botonSiguiente = prevNext.querySelector('.siguiente');

    botonAnterior.style.display = paginaVista === 1 ? 'none' : 'inline-block';
    botonSiguiente.style.display = (paginaVista * productosPorPagina) >= productos.length ? 'none' : 'inline-block';
}

document.querySelector('.anterior').addEventListener('click', anterior);
document.querySelector('.siguiente').addEventListener('click', siguiente);

function siguiente() {
    if ((paginaVista * productosPorPagina) < productos.length) {
        paginaVista++;
        mostrar(paginaVista);
        window.scrollTo(0, 0);
        pasarPagina();
    }
}

function anterior() {
    if (paginaVista > 1) {
        paginaVista--;
        mostrar(paginaVista);
        window.scrollTo(0, 0);
        pasarPagina();
    }
}

function actualizarEstadoBotones() {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    carrito.forEach(producto => {
        const boton = document.querySelector(`.agregar-al-carrito[data-idProducto="${producto.idProducto}"]`);
        if (boton) {
            boton.style.backgroundColor = '#504537';
            boton.textContent = 'Agregado!';
        }
    });
}

mostrar(paginaVista);
pasarPagina();

const contadorCarrito = document.getElementById('contador');
let contador = 0;

function inicializarContador() {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    contador = carrito.length;
    contadorCarrito.querySelector('p').innerHTML = contador;
}

inicializarContador();

contenedorProductos.addEventListener('click', function(ev){
    if(ev.target && ev.target.classList.contains('agregar-al-carrito')){
        const idProducto = ev.target.getAttribute('data-idProducto');
        const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
        const productoExistente = carrito.find(p => p.idProducto == idProducto);
        
        if (!productoExistente) {
            const producto = productos.find(p => p.idProducto == idProducto);
            producto.cantidad = 1; 
            carrito.push(producto);
            localStorage.setItem('carrito', JSON.stringify(carrito));
            incrementarContador();
            ev.target.style.backgroundColor = '#504537';
            ev.target.textContent = 'Agregado!';
        } else {
            console.log("El producto ya está agregado al carrito.");
        }
    }
});

function incrementarContador(){
    contador++;
    contadorCarrito.querySelector('p').innerHTML = contador;
}


document.addEventListener('DOMContentLoaded', actualizarEstadoBotones);
