const productos = [
    {
        idProducto : 1,
        imagen: "/product-images/remeraOversize.jpg",
        logo: "/images/urbanLogoNegro.png",
        nombre: "Remera Oversize",
        precio: "$////"
    },
    {
        idProducto : 2,
        imagen: "/product-images/jeanMom.jpg",
        logo: "/images/urbanLogoNegro.png",
        nombre: "*Jeans* Mom",
        precio: "$////"
    },
    {
        idProducto : 3,
        imagen: "/product-images/canguroOversize.jpg",
        logo: "/images/urbanLogoNegro.png",
        nombre: "Hoodie Oversize",
        precio: "$////"
    },
    {
        idProducto : 4,
        imagen: "/product-images/conjuntoSyR.jpg",
        logo: "/images/urbanLogoNegro.png",
        nombre: "Short & Remera",
        precio: "$////"
    },
    {
        idProducto : 5,
        imagen: "/product-images/gorras.jpg",
        logo: "/images/urbanLogoNegro.png",
        nombre: "Gorras planas",
        precio: "$////"
    }, {
        idProducto:6,
        imagen: "/product-images/campera.jpg",
        logo: "/images/urbanLogoNegro.png",
        nombre: "Campera inflable",
        precio: "$////"
    },
    {
        idProducto: 7,
        imagen: "/product-images/zapatillas.jpg",
        logo: "/images/urbanLogoNegro.png",
        nombre: "Zapatillas Air Jordan",
        precio: "$////"
    },
    {
        idProducto: 8,
        imagen: "/product-images/joggerCargo.jpg",
        logo: "/images/urbanLogoNegro.png",
        nombre: "Jogger Cargo",
        precio: "$////"
    },
    {
        idProducto: 9,
        imagen: "/product-images/bermudajersey.jpg",
        logo: "/images/urbanLogoNegro.png",
        nombre: "Bermuda Jersey",
        precio: "$////"
    },
    {
        idProducto: 10,
        imagen: "/product-images/camisetaBaseball.jpg",
        logo: "/images/urbanLogoNegro.png",
        nombre: "Camiseta NY Yankees",
        precio: "$////"
    }, {
        idProducto: 11,
        imagen: "/product-images/buzo.jpg",
        logo: "/images/urbanLogoNegro.png",
        nombre: "Buzo c/redondo",
        precio: "$////"
    },
    {
        idProducto: 12,
        imagen: "/product-images/jeanSlim.jpg",
        logo: "/images/urbanLogoNegro.png",
        nombre: "Jeans Slim Fit",
        precio: "$////"
    },
    {
        idProducto: 13,
        imagen: "/product-images/jeanCargo.jpg",
        logo: "/images/urbanLogoNegro.png",
        nombre: "Jeans Cargo",
        precio: "$////"
    },
    {
        idProducto: 14,
        imagen: "/product-images/remeraOso.jpg",
        logo: "/images/urbanLogoNegro.png",
        nombre: "Remera Bear OVSZ",
        precio: "$////"
    },
    {
        idProducto: 15,
        imagen: "/product-images/morral.jpg",
        logo: "/images/urbanLogoNegro.png",
        nombre: "Morral Basic",
        precio: "$////"
    }, {
        idProducto: 16,
        imagen: "/product-images/pescador.jpg",
        logo: "/images/urbanLogoNegro.png",
        nombre: "Piluso Pescador",
        precio: "$////"
    },
    {
        idProducto: 17,
        imagen: "/product-images/vans.jpg",
        logo: "/images/urbanLogoNegro.png",
        nombre: "Vans SK8-HI",
        precio: "$////"
    },
    {
        idProducto: 18,
        imagen: "/product-images/camuflado.jpg",
        logo: "/images/urbanLogoNegro.png",
        nombre: "Jogger Camuflado",
        precio: "$////"
    },
    {
        idProducto: 19,
        imagen: "/product-images/gorro.jpg",
        logo: "/images/urbanLogoNegro.png",
        nombre: "Gorro Billabong",
        precio: "$////"
    },
    {
        idProducto: 20,
        imagen: "/product-images/champion.jpg",
        logo: "/images/urbanLogoNegro.png",
        nombre: "Remera Oversize",
        precio: "$////"
    },
    {
        idProducto: 21,
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
                    <div class="agregar"><button class="agregar-al-carrito">Agregar al carrito</button></div>
                    
                </div>
            </div>
        `;
        contenedorProductos.insertAdjacentHTML('beforeend', prodHTML);
    });
    const agregar = document.querySelectorAll('.agregar-al-carrito');
     agregar.forEach(boton =>{
       boton.addEventListener('click', (ev) =>{
       incrementarContador();
       document.querySelector('.shopping-cart .count p').innerText = contador;
       boton.innerText='Producto agregado!'
       boton.disabled=true;
       ev.target.style.backgroundColor = '#008f39'
    });
});

}
let contador=0;
function incrementarContador(){
    contador ++;
}

function decrementarContador(){
    if(contador > 0){
        contador --;
    } 
}


function agregarAlCarrito(productId){
    let carrito=JSON.parse(local)
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



