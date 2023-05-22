

  let servicios = {
    social: {
      nombre: 'Maquillaje Social',
      precio: 950,
      disponibilidad: 'Lunes a sabados de 10am a 22pm'
    },
    artistico: {
      nombre: 'Maquillaje Artistico',
      precio: 850,
      disponibilidad: 'Lunes a Sabados de 10am a 22pm'
    },
    eventos: {
      nombre: 'Maquillaje para eventos especiales',
      precio: 'Consulte al privado, va a depender del evento',
      disponibilidad: 'Consultar disponibilidad'
    },
    novia: {
      nombre: 'Maquillaje de novia',
      precio: 1500,
      disponibilidad: 'Consultar disponibilidad'
    }
  };

  // Función del menú.
  
  function menu() {
    alert('Bienvenido a VerinArte, tu servicio de maquillaje.');
    let opciones = parseInt(prompt(
      'Ingrese una opción: \n 1) Consulta sobre servicios \n 2) Consulta sobre sus trabajos \n 3) Consulta de precios y disponibilidad horaria. \n 4) Salir'
    ));
  
    switch (opciones) {
      case 1:
        consultaServicios();
        break;
      case 2:
        consultaTrabajos();
        break;
      case 3:
        consultaPreciosDisponibilidad();
        break;
      case 4:
        mostrarMensaje('Gracias por visitarnos. ¡Vuelve pronto!');
        break;
      default:
        mostrarMensaje('Opción inválida. Por favor, elige una opción válida del menú.');
        menu(); // Vuelve a mostrar el menú en caso de opción inválida
        break;
    }
  
    return opciones;
  }
  
  // Función para mostrar un mensaje al cliente.

  function mostrarMensaje(mensaje) {
    alert(mensaje);
  }
  
  // Función para consultar los servicios.

  function consultaServicios() {
    let mensaje = 'Ofrecemos los siguientes servicios:\n';
    for (let servicio in servicios) {
      mensaje += `- ${servicios[servicio].nombre}\n`;
    }
    mostrarMensaje(mensaje);
  }
  
  // Función para consultar los trabajos.

  function consultaTrabajos() {
    let mensaje = 'Puedes acceder a mi portfolio a través del siguiente enlace: ';
    mensaje += "https://www.flipsnack.com/verinart/portfolio.html";
    mostrarMensaje(mensaje);
  }
  
  
  // Función para consultar los precios y disponibilidad.

  function consultaPreciosDisponibilidad() {
    let mensaje = 'Los precios y disponibilidad son los siguientes:\n';
    for (let servicio in servicios) {
      mensaje += `- ${servicios[servicio].nombre}: $${servicios[servicio].precio}, disponibilidad: ${servicios[servicio].disponibilidad}\n`;
    }
    mostrarMensaje(mensaje);
  }
  
  // Llamar a la función "menu"
  menu();