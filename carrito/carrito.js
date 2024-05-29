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
                <td>${producto.nombre}</td>
                <td>$${precio.toFixed(2)}</td>
                <td>${producto.cantidad}</td>
                <td>$${subtotal.toFixed(2)}</td>
                <td><button class="eliminar" data-idproducto="${producto.idProducto}"><i class="fa fa-trash" aria-hidden="true"></i></td>

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

document.addEventListener('DOMContentLoaded', (ev) => {
    const btnComprar = document.getElementById('btnComprar');
    const compraExitosa = document.getElementById('compraExitosa');
    const carritoElement = document.getElementById('carrito');
    const vacio = document.getElementById('carrito-vacio');

    btnComprar.addEventListener('click', () => {
        let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
        let nombreUsuario = localStorage.getItem('nombreUsuario');
        compraExitosa.innerHTML = '';
        let contenido = document.createElement('div');
        if (carrito.length > 0 && nombreUsuario) {
            contenido.innerHTML = `
                <div class='container-mensaje'>
                    <div class='cont-mensaje'>
                        <h1>¡Tu compra se realizó con Éxito!</h1>
                        <h3>Enviaremos la factura al siguiente correo: <br>
                        <span>${localStorage.getItem('emailUsuario')}</span></h3>
                        <a href="../productos/productos.html"><button id='seguir-comprando'>Seguir comprando</button></a>
                    </div>
                </div>
            `;
            carritoElement.style.display = 'none';
            compraExitosa.appendChild(contenido);
            localStorage.removeItem('carrito');
            localStorage.removeItem('prodAgregado');
            actualizarTabla();
            inicializarContador();
        }else if(!nombreUsuario && carrito.length > 0){
            vacio.innerHTML= '';
            let contenido= document.createElement('div');
            contenido.innerHTML = `
            <div class='container-mensaje'>
            <div class='cont-mensaje'>
                <h3>Para realizar una compra, primero tienes que registrarte!</h3>
                <a href="../registrarse/registrarse.html"><button id='registrarse'>Registrarse</button></a>
            </div>
            </div
            `;
            vacio.appendChild(contenido);
            vacio.style.display = 'block';
        } else  {
            vacio.innerHTML = '';
            let contenido = document.createElement('div');
            contenido.innerHTML = `
            <div class='container-mensaje'>
                <div class='cont-mensaje'>
                    <h3>El carrito está vacío <br>
                    <span>No se puede realizar la compra porque el carrito está vacío.</span></h3>
                    <a href="../productos/productos.html"><button id='agregar-productos'>Buscar Productos</button></a>
                </div>
                </div>
            `;
            vacio.appendChild(contenido);
            vacio.style.display = 'block';
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const seguirComprando = document.getElementById('seguir-comprando');
    if (seguirComprando) {
        seguirComprando.addEventListener('click', () => {
            localStorage.removeItem('carrito');
            localStorage.removeItem('prodAgregado');
            inicializarContador();
        });
    }
});

function inicializarContador() {
    const contadorCarrito = document.getElementById('contador');
    if (contadorCarrito) {
        const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
        contadorCarrito.querySelector('p').innerHTML = carrito.length;
    }
}
