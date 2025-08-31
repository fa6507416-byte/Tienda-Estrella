// Mostrar secciones
function mostrarSeccion(id) {
  document.querySelectorAll('.formulario').forEach(sec => {
    sec.classList.add('oculto');
  });
  document.getElementById(id).classList.remove('oculto');
}

// Registrar Empleado
function registrarEmpleado() {
  const nombre = document.getElementById('nombreEmpleado').value;
  const cargo = document.getElementById('cargoEmpleado').value;
  if (!nombre || !cargo) return alert("Complete todos los campos");

  const empleados = JSON.parse(localStorage.getItem('empleados')) || [];
  empleados.push({ nombre, cargo });
  localStorage.setItem('empleados', JSON.stringify(empleados));
  mostrarEmpleados();
}

// Registrar Producto
function registrarProducto() {
  const nombre = document.getElementById('nombreProducto').value;
  const precio = document.getElementById('precioProducto').value;
  if (!nombre || !precio) return alert("Complete todos los campos");

  const productos = JSON.parse(localStorage.getItem('productos')) || [];
  productos.push({ nombre, precio: parseFloat(precio) });
  localStorage.setItem('productos', JSON.stringify(productos));
  mostrarProductos();
}

// Registrar Cliente
function registrarCliente() {
  const nombre = document.getElementById('nombreCliente').value;
  const email = document.getElementById('emailCliente').value;
  if (!nombre || !email) return alert("Complete todos los campos");

  const clientes = JSON.parse(localStorage.getItem('clientes')) || [];
  clientes.push({ nombre, email });
  localStorage.setItem('clientes', JSON.stringify(clientes));
  mostrarClientes();
}

// Mostrar listas
function mostrarEmpleados() {
  const lista = document.getElementById('listaEmpleados');
  lista.innerHTML = '';
  const empleados = JSON.parse(localStorage.getItem('empleados')) || [];
  empleados.forEach(emp => {
    const li = document.createElement('li');
    li.textContent = `${emp.nombre} - ${emp.cargo}`;
    lista.appendChild(li);
  });
}

function mostrarProductos() {
  const lista = document.getElementById('listaProductos');
  lista.innerHTML = '';
  const productos = JSON.parse(localStorage.getItem('productos')) || [];
  productos.forEach(prod => {
    const li = document.createElement('li');
    li.textContent = `${prod.nombre} - L ${prod.precio.toFixed(2)}`;
    lista.appendChild(li);
  });
}

function mostrarClientes() {
  const lista = document.getElementById('listaClientes');
  lista.innerHTML = '';
  const clientes = JSON.parse(localStorage.getItem('clientes')) || [];
  clientes.forEach(cli => {
    const li = document.createElement('li');
    li.textContent = `${cli.nombre} - ${cli.email}`;
    lista.appendChild(li);
  });
}

// Inicializar
mostrarEmpleados();
mostrarProductos();
mostrarClientes();
