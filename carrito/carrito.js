document.addEventListener('DOMContentLoaded', () => {
    const tbody = document.querySelector('.table-desc');
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    function actualizarTabla() {
        tbody.innerHTML = ''; 
        let total = 0;
        carrito.forEach(producto => {
            const tr = document.createElement('tr');
            const precio = parseFloat(producto.precio.replace('$', ''));
            const subtotal = precio * producto.cantidad;
            total += subtotal;
            tr.innerHTML = `
                <td><img src="${producto.imagen}" alt="${producto.nombre}" width="40"></td>
                <td>${producto.nombre}</td>
                <td>$${precio.toFixed(2).toLocaleString('en-ARS')}</td>
                <td>${producto.cantidad}</td>
                <td>$${subtotal.toFixed(2)}</td>
                <td><button class="eliminar" data-idproducto="${producto.idProducto}"><i class="fa fa-trash-o" aria-hidden="true"></i></button></td>
            `;
            tbody.appendChild(tr);
        });
        
        const contadorCarrito = document.getElementById('contador');
        if (contadorCarrito) {
            contadorCarrito.querySelector('p').innerHTML = carrito.length;
        }
        const totalDelCarrito = document.getElementById('total-carrito');
        if (totalDelCarrito) {
            totalDelCarrito.textContent = `Total: $${total.toFixed(2)}`;
        }

    }
     
    tbody.addEventListener('click', function(ev) {
        if (ev.target && ev.target.closest('.eliminar')) {
            const idProducto = ev.target.closest('.eliminar').getAttribute('data-idproducto');
            carrito = carrito.filter(producto => producto.idProducto != idProducto);
            localStorage.setItem('carrito', JSON.stringify(carrito));
            actualizarTabla();
            let prodAgregado = JSON.parse(localStorage.getItem('prodAgregado')) || [];
            prodAgregado = prodAgregado.filter(id => id != idProducto);
            localStorage.setItem('prodAgregado', JSON.stringify(prodAgregado));
        }
    });

    actualizarTabla();
});

document.addEventListener('DOMContentLoaded', (ev) =>{

    const btnComprar = document.getElementById('btnComprar');
    const compraExitosa = document.getElementById('compraExitosa');
    const carrito= document.getElementById('carrito');

    btnComprar.addEventListener('click', () =>{
        compraExitosa.innerHTML = '';
        let contenido = document.createElement('div');
        contenido.innerHTML = `
        <div class='container-mensaje'>
        <div class='cont-mensaje'>
        <h1>¡Tu compra se realizó con Éxito!</h1>
        <h3>Te enviamos el detalle a </h3>
        <p>${localStorage.getItem('emailUsuario')}</p>
        <button class='agregar' id='seguir-comprando'><a href='../productos/productos.html'>Seguir comprando</a></button>
        </div>
        </div>
        `;
        carrito.style.display = 'none';
        compraExitosa.appendChild(contenido);
        localStorage.removeItem('carrito');
        localStorage.removeItem('prodAgregado');
        actualizarTabla();
        inicializarContador();
        
    });

});
document.addEventListener('DOMContentLoaded', () =>{
    const seguirComprando = document.getElementById('seguir-comprando');
    if(seguirComprando){
        seguirComprando.addEventListener('click', ()=>{
            localStorage.removeItem('carrito');
            localStorage.removeItem('prodAgregado');
            inicializarContador();
        })
    }
})
