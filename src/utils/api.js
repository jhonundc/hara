// Este archivo simula las llamadas a un backend
// En un proyecto real, aquí harías fetch() o usarías una librería como Axios
// para comunicarte con tu API que a su vez interactuaría con MySQL.

// Simula un registro de usuario
export const registerUser = async (userData) => {
  console.log('Simulando registro de usuario:', userData);
  // Aquí iría la llamada real a tu API de registro
  // const response = await fetch('/api/register', { method: 'POST', body: JSON.stringify(userData) });
  // const data = await response.json();
  // return data;

  // Simulación de respuesta exitosa
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Registro simulado exitoso');
      resolve({ success: true, message: 'Usuario registrado con éxito (simulado)' });
    }, 1000); // Simula un delay de red
  });
};

// Simula un inicio de sesión de usuario
export const loginUser = async (credentials) => {
  console.log('Simulando inicio de sesión:', credentials);
  // Aquí iría la llamada real a tu API de login
  // const response = await fetch('/api/login', { method: 'POST', body: JSON.stringify(credentials) });
  // const data = await response.json();
  // return data;

  // Simulación de respuesta exitosa
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Inicio de sesión simulado exitoso');
      resolve({ success: true, message: 'Inicio de sesión exitoso (simulado)', token: 'fake-jwt-token' });
    }, 1000); // Simula un delay de red
  });
};

// Simula obtener productos (ya lo tenemos en mock, pero así se haría con API)
export const fetchProducts = async () => {
  console.log('Simulando obtención de productos');
  // Aquí iría la llamada real a tu API de productos
  // const response = await fetch('/api/products');
  // const data = await response.json();
  // return data;

  // Simulación usando mock data
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Productos obtenidos (simulado)');
      // Importar mock data aquí si no quieres tenerla en App.js
      const { products } = require('../mock/products');
      resolve({ success: true, products });
    }, 500);
  });
};