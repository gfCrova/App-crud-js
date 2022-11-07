
// CLASES 

class Producto {
    constructor(nombre, precio, fecha, cantidad) {
        this.nombre = nombre
        this.precio = precio
        this.fecha = fecha
        this.cantidad = cantidad
    }
}

class Interfaz {
    agregarProducto(product) {
        const listaProductos = document.getElementById('lista-productos');
        const element = document.createElement('div');
        element.innerHTML = `
            <div class="card bg-light cardPadre text-center m-4 rounded-5">
                <div class="card-body">
                    <ul class="d-flex justify-content-around align-items-center list-unstyled f-5">
                        <li><strong>Product</strong>: ${product.nombre}</li>
                        <li><strong>Precio</strong>: ${product.precio}</li>
                        <li><strong>Fecha</strong>: ${product.fecha}</li>
                        <li><strong>Cantidad</strong>: ${product.cantidad}</li>
                        <a href="#" class="btn btn-primary" name="delete">Delete</a>
                    </ul>
                </div>
            </div>
        `;
        listaProductos.appendChild(element);
    }

    resetForm() {
        document.getElementById('formProductos').reset();
    }

    eliminarProducto(element) {
        if (element.name === 'delete') {
            element.parentElement.parentElement.parentElement.remove();
            this.mostrarMensaje('El producto se ha eliminado', 'danger')
        }
    }

    mostrarMensaje(mensaje, colorCss) {
        const div = document.createElement('div');
        div.className = `alert alert-${colorCss} mt-4`;
        div.appendChild(document.createTextNode(mensaje));
        // Mostrando el el DOM
        const container = document.querySelector('.container');
        const app = document.querySelector('#app');
        container.insertBefore(div, app);
        // Eliminando el mensaje automaticamente
        setTimeout(() => {
            document.querySelector('.alert').remove();
        }, 2500);
    }
}

/*******************************************************************/

// EVENTOS

////////////// Guardar el Producto /////////////////

const form = document.getElementById('formProductos');

form.addEventListener('submit', (e) => {

    const name_ = document.getElementById('nombre').value;
    const price_ = document.getElementById('precio').value;
    const date_ = document.getElementById('fecha').value;
    const amount_ = document.getElementById('cantidad').value;

    const product_ = new Producto(name_, price_, date_, amount_); // Nueva Instancia de la clase producto
    const interfaz_ = new Interfaz();                            // Nueva Instancia de la clase Interfaz

    if (name_ === '' || price_ === '' || date_ === '') {
        return interfaz_.mostrarMensaje('Por favor introducir datos en los campos obligatorios!', 'danger');
    }
    interfaz_.agregarProducto(product_);  // A la Nueva Instancia de la clase Interfaz 
    interfaz_.resetForm();               // Llamar al método resetForm();
    interfaz_.mostrarMensaje('Producto Agregado Satisfactoriamente', 'success');

    e.preventDefault();   // Cancelar comportamiento por defecto
});


//////////// Borrar el producto ////////////////////

const deleteProducts = document.getElementById('lista-productos');

deleteProducts.addEventListener('click', (e) => {
    const interfazDelete = new Interfaz();
    interfazDelete.eliminarProducto(e.target);
})