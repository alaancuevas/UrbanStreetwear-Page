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
        imagen: "/product-images/prod1.jpg",
        logo: "/images/urbanLogoNegro.png",
        nombre: "Remera Oversize",
        precio: "$////"
    }, {
        imagen: "/product-images/prod1.jpg",
        logo: "/images/urbanLogoNegro.png",
        nombre: "Remera Oversize",
        precio: "$////"
    },
    {
        imagen: "/product-images/prod1.jpg",
        logo: "/images/urbanLogoNegro.png",
        nombre: "Remera Oversize",
        precio: "$////"
    },
    {
        imagen: "/product-images/prod1.jpg",
        logo: "/images/urbanLogoNegro.png",
        nombre: "Remera Oversize",
        precio: "$////"
    },
    {
        imagen: "/product-images/prod1.jpg",
        logo: "/images/urbanLogoNegro.png",
        nombre: "Remera Oversize",
        precio: "$////"
    },
    {
        imagen: "/product-images/prod1.jpg",
        logo: "/images/urbanLogoNegro.png",
        nombre: "Remera Oversize",
        precio: "$////"
    }, {
        imagen: "/product-images/prod1.jpg",
        logo: "/images/urbanLogoNegro.png",
        nombre: "Remera Oversize",
        precio: "$////"
    },
    {
        imagen: "/product-images/prod1.jpg",
        logo: "/images/urbanLogoNegro.png",
        nombre: "Remera Oversize",
        precio: "$////"
    },
    {
        imagen: "/product-images/prod1.jpg",
        logo: "/images/urbanLogoNegro.png",
        nombre: "Remera Oversize",
        precio: "$////"
    },
    {
        imagen: "/product-images/prod1.jpg",
        logo: "/images/urbanLogoNegro.png",
        nombre: "Remera Oversize",
        precio: "$////"
    },
    {
        imagen: "/product-images/prod1.jpg",
        logo: "/images/urbanLogoNegro.png",
        nombre: "Remera Oversize",
        precio: "$////"
    },
    {
        imagen: "/product-images/prod1.jpg",
        logo: "/images/urbanLogoNegro.png",
        nombre: "Remera Oversize",
        precio: "$////"
    }
    
]

const contenedorProductos= document.getElementById('container-productos');

productos.forEach(producto => {
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