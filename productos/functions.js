const productos = [
    {
        imagen: "/product-images/remeraOversize.jpg",
        logo: "/images/urbanLogoNegro.png",
        nombre: "Remera Oversize",
        precio: "$////"
    },
    {
        imagen: "/product-images/jeanMom.jpg",
        logo: "/images/urbanLogoNegro.png",
        nombre: "*Jeans* Mom",
        precio: "$////"
    },
    {
        imagen: "/product-images/canguroOversize.jpg",
        logo: "/images/urbanLogoNegro.png",
        nombre: "Hoodie Oversize",
        precio: "$////"
    },
    {
        imagen: "/product-images/conjuntoSyR.jpg",
        logo: "/images/urbanLogoNegro.png",
        nombre: "Short & Remera",
        precio: "$////"
    },
    {
        imagen: "/product-images/gorras.jpg",
        logo: "/images/urbanLogoNegro.png",
        nombre: "Gorras planas",
        precio: "$////"
    }, {
        imagen: "/product-images/campera.jpg",
        logo: "/images/urbanLogoNegro.png",
        nombre: "Campera inflable",
        precio: "$////"
    },
    {
        imagen: "/product-images/zapatillas.jpg",
        logo: "/images/urbanLogoNegro.png",
        nombre: "Zapatillas Air Jordan",
        precio: "$////"
    },
    {
        imagen: "/product-images/joggerCargo.jpg",
        logo: "/images/urbanLogoNegro.png",
        nombre: "Jogger Cargo",
        precio: "$////"
    },
    {
        imagen: "/product-images/bermudajersey.jpg",
        logo: "/images/urbanLogoNegro.png",
        nombre: "Bermuda Jersey",
        precio: "$////"
    },
    {
        imagen: "/product-images/camisetaBaseball.jpg",
        logo: "/images/urbanLogoNegro.png",
        nombre: "Camiseta NY Yankees",
        precio: "$////"
    }, {
        imagen: "/product-images/buzo.jpg",
        logo: "/images/urbanLogoNegro.png",
        nombre: "Buzo c/redondo",
        precio: "$////"
    },
    {
        imagen: "/product-images/jeanSlim.jpg",
        logo: "/images/urbanLogoNegro.png",
        nombre: "Jeans Slim Fit",
        precio: "$////"
    },
    {
        imagen: "/product-images/jeanCargo.jpg",
        logo: "/images/urbanLogoNegro.png",
        nombre: "Jeans Cargo",
        precio: "$////"
    },
    {
        imagen: "/product-images/remeraOso.jpg",
        logo: "/images/urbanLogoNegro.png",
        nombre: "Remera Bear OVSZ",
        precio: "$////"
    },
    {
        imagen: "/product-images/morral.jpg",
        logo: "/images/urbanLogoNegro.png",
        nombre: "Morral Basic",
        precio: "$////"
    }, {
        imagen: "/product-images/pescador.jpg",
        logo: "/images/urbanLogoNegro.png",
        nombre: "Piluso Pescador",
        precio: "$////"
    },
    {
        imagen: "/product-images/vans.jpg",
        logo: "/images/urbanLogoNegro.png",
        nombre: "Vans SK8-HI",
        precio: "$////"
    },
    {
        imagen: "/product-images/camuflado.jpg",
        logo: "/images/urbanLogoNegro.png",
        nombre: "Jogger Camuflado",
        precio: "$////"
    },
    {
        imagen: "/product-images/gorro.jpg",
        logo: "/images/urbanLogoNegro.png",
        nombre: "Gorro Billabong",
        precio: "$////"
    },
    {
        imagen: "/product-images/champion.jpg",
        logo: "/images/urbanLogoNegro.png",
        nombre: "Remera Oversize",
        precio: "$////"
    },
    {
        imagen: "/product-images/universitaria.jpg",
        logo: "/images/urbanLogoNegro.png",
        nombre: "Campera Universitaria",
        precio: "$////"
    }
    
]

const contenedorProductos = document.getElementById('container-productos');
const productosPorPagina = 9;
let paginaVista = 1;

function mostrar(pagina) {
    contenedorProductos.innerHTML = '';
    const inicio = (pagina - 1) * productosPorPagina;
    const fin = pagina * productosPorPagina;
    const productosPagina = productos.slice(inicio, fin);

    productosPagina.forEach(producto => {
        const prodHTML = `
        <div class="producto">
                <div class="foto-producto">
                    <img src="${producto.imagen}" alt="">
                </div>
                <div class="descripcion-producto">
                    <img src="${producto.logo}" alt="logo urban">
                    <h2>${producto.nombre}</h2>
                    <h3>${producto.precio}</h3>
                    <div class="agregar"><button>Agregar al carrito</button></div>
                </div>
            </div>
        `;
        contenedorProductos.insertAdjacentHTML('beforeend', prodHTML);
    });
}

function siguiente() {
    if ((paginaVista * productosPorPagina) < productos.length) {
        paginaVista++;
        mostrar(paginaVista);
        actualizarBotones();
    }
}

function anterior() {
    if (paginaVista > 1)
        paginaVista--;
    mostrar(paginaVista);
    actualizarBotones();
}

function actualizarBotones() {
    const prevNext = document.getElementById('prev-next');
    const botonAnterior = prevNext.querySelector('.anterior');
    const botonSiguiente = prevNext.querySelector('.siguiente');

    botonAnterior.style.display = paginaVista === 1 ? 'none' : 'inline-block';
    botonSiguiente.style.display = (paginaVista * productosPorPagina) >= productos.length ? 'none' : 'inline-block';
}

document.querySelector('.anterior').addEventListener('click', anterior);
document.querySelector('.siguiente').addEventListener('click', siguiente);

mostrar(paginaVista);
actualizarBotones();

