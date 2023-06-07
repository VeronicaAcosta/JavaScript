
 // Productos

const productos = [
    { id: 1, nombre: 'Labial', precio: 500, imagen: 'https://cdn.shopify.com/s/files/1/0634/5457/6854/products/beauty-creations-cosmetics-pr-box-de-labios-seal-the-deal-nude_1024x1024.jpg?v=1650385138' },
    { id: 2, nombre: 'Máscara de pestañas', precio: 950, imagen: 'https://karinacosmeticos.com/mystore/item/1985/b/mascara-de-pestanas-beauty-creations' },
    { id: 3, nombre: 'Sombra de ojos', precio: 1200, imagen: 'https://tiendabeautyspace.cl/wp-content/uploads/2022/11/teaseweb1-scaled-1.jpg' },
  ];
  
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
    }
  }
  
  // Función para remover un producto del carrito

  function removerDelCarrito(index) {
    carrito.splice(index, 1);
    actualizarCarrito();
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

  
  
  // Evento al cargar la página

  window.addEventListener('DOMContentLoaded', function() {
  const carritoGuardado = localStorage.getItem('carrito');
  if (carritoGuardado) {
    carrito = JSON.parse(carritoGuardado);
  }
    mostrarProductos();
    actualizarCarrito();
  });
  
  