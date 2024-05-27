document.addEventListener('DOMContentLoaded', () => {
    const tbody = document.querySelector('.table-desc');
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    carrito.forEach(producto => {
        const tr = document.createElement('tr');
        const precio = parseFloat(producto.precio.replace('$', ''));
        const subtotal = precio * producto.cantidad;

        tr.innerHTML = `
            <td><img src="${producto.imagen}" alt="${producto.nombre}" width="40"></td>
            <td>${producto.nombre}</td>
            <td>${producto.precio}</td>
            <td>${producto.cantidad}</td>
            <td>$${subtotal.toFixed(2)}</td>
            <td><button class="eliminar" data-idProducto="${producto.idProducto}"><i class="fa fa-trash-o" aria-hidden="true" ></i></button></td>
        `;
        tbody.appendChild(tr);
    });

    tbody.addEventListener('click', function(ev) {
        if (ev.target && ev.target.classList.contains('eliminar')) {
            const idProducto = ev.target.getAttribute('data-idProducto');
            carrito = carrito.filter(producto => producto.idProducto != idProducto);
            localStorage.setItem('carrito', JSON.stringify(carrito));
            ev.target.closest('tr').remove();
            const contadorCarrito = document.getElementById('contador');
            contadorCarrito.querySelector('p').innerHTML = carrito.length; 
        }
    });
});