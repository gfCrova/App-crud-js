
// CLASES 

class Producto {
    constructor(name, price, year){
        this.name = name;
        this.price = price;
        this.year = year;
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

document.getElementById('formProductos').addEventListener('submit', () => {
    alert('Enviando el producto')
});

document.querySelector('button');