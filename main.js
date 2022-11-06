
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
    agregarProducto(){

    }

    eliminarProducto(){

    }

    mostrarMensaje(){

    }
}

// EVENTOS

const form = document.getElementById('formProductos');

form.addEventListener('submit', () =>  { 
    const name = document.getElementById('nombre').value;
    const price = document.getElementById('precio').value;
    const date = document.getElementById('fecha').value;
    const amount = document.getElementById('cantidad').value;
    console.log(name, price, amount, date);
});
