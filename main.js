
// CLASES 

class Producto {
    constructor(nombre, precio, fecha, cantidad){
        this.nombre = nombre
        this.precio = precio
        this.fecha = fecha
        this.cantidad = cantidad
    }
}

class Interfaz {
    agregarProducto(product){
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

    resetForm(){
        document.getElementById('formProductos').reset();
    }

    eliminarProducto(element){
        if(element.name === 'delete'){
            element.parentElement.parentElement.parentElement.remove();
            this.mostrarMensaje('El producto se ha eliminado', 'danger')
        }
    }

    mostrarMensaje(mensaje, colorCss){
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
        }, 2000);
    }
}

/*******************************************************************/

// EVENTOS

const form = document.getElementById('formProductos');

form.addEventListener('submit', (e) =>  { 
    const name = document.getElementById('nombre').value;
    const price = document.getElementById('precio').value;
    const date = document.getElementById('fecha').value;
    const amount = document.getElementById('cantidad').value;

    const product = new Producto(name, price, date, amount); // Nueva Instancia de la clase producto
    
    const interfaz = new Interfaz();
    if(name === '' || price === '' || date === '') {
        return interfaz.mostrarMensaje('Por favor introducir datos en los campos obligatorios!', 'danger');
    }
    interfaz.agregarProducto(product);  // A la Nueva Instancia de la clase Interfaz 
    interfaz.resetForm();               // Llamar al método resetForm();

    interfaz.mostrarMensaje('Producto Agregado Satisfactoriamente', 'success');

    e.preventDefault();   // Cancelar comportamiento por defecto
});

const deleteProducts = document.getElementById('lista-productos');

deleteProducts.addEventListener('click', (e) => {
    const interfaz = new Interfaz();
    interfaz.eliminarProducto(e.target);
})