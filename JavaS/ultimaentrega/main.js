// Productos
let productos = [];

// Carrito de compras
let carrito = [];

// Función para mostrar los productos en la página

function mostrarProductos() {
  const productosContainer = document.getElementById('productos-container');

  productosContainer.innerHTML = '';

  productos.forEach((producto) => {
    const productoElement = document.createElement('div');
    productoElement.innerHTML = `
      <h2>${producto.nombre}</h2>
      <img src="${producto.imagen}" alt="${producto.nombre}" class="producto-imagen">
      <p class="p">Precio: $${producto.precio}</p>
      <button class="button" onclick="agregarAlCarrito(${producto.id})">Agregar al carrito</button>
    `;
    productosContainer.appendChild(productoElement);
  });
}

// Función para agregar un producto al carrito

function agregarAlCarrito(id) {
  const producto = productos.find((p) => p.id === id);

  if (producto) {
    carrito.push(producto);
    actualizarCarrito();

    Swal.fire(
      'Agregado',
      'El producto ha sido agregado al carrito',
      'success'
    );
  }
}

// Función para remover un producto del carrito

function removerDelCarrito(index) {
  Swal.fire({
    title: '¿Estás seguro?',
    text: 'El producto será eliminado del carrito',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Eliminar',
    cancelButtonText: 'Cancelar',
    reverseButtons: true
  }).then((result) => {
    if (result.isConfirmed) {
      carrito.splice(index, 1);
      actualizarCarrito();

      Swal.fire(
        'Eliminado',
        'El producto ha sido eliminado del carrito',
        'success'
      );
    }
  });
}

// Función para mostrar el contenido del carrito

function actualizarCarrito() {
  const carritoContainer = document.getElementById('carrito-container');
  const totalContainer = document.getElementById('total-container');

  carritoContainer.innerHTML = '';
  totalContainer.innerHTML = '';

  carrito.forEach((producto, index) => {
    const productoElement = document.createElement('div');
    productoElement.innerHTML = 
    `<p>${producto.nombre} - $${producto.precio}</p>
      <button onclick="removerDelCarrito(${index})">Eliminar</button>`;
    carritoContainer.appendChild(productoElement);
  });

  const total = carrito.reduce((sum, producto) => sum + producto.precio, 0);

  totalContainer.innerHTML = `<p>Total: $${total}</p>`;
  localStorage.setItem('carrito', JSON.stringify(carrito));
}

// Cargar datos desde JSON local

function cargarDatos() {
  fetch('productos.json')
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Error al cargar los productos');
      }
    })
    .then((data) => {
      productos = data;
      mostrarProductos();
    })
    .catch((error) => {
      console.error(error);
    });
}

//Carrito datos

onload = function() {
    const carritoGuardado = localStorage.getItem('carrito');
    if (carritoGuardado) {
      carrito = JSON.parse(carritoGuardado);
    }
  
    cargarDatos();
    actualizarCarrito();
  };
  
