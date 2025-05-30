import React, { useState } from 'react';

const CheckoutSection = ({ cartItems, onNavigate }) => {
  const [formData, setFormData] = useState({ name: '', address: '', paymentMethod: '' });
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica real de procesamiento de pago
    console.log('Procesando pago:', formData, 'Items:', cartItems);
    alert('¡Pago simulado exitoso! Gracias por tu compra.');
    // Simular limpieza del carrito y navegación a una página de confirmación
    // En un caso real, esto implicaría limpiar el estado del carrito en App.js
    onNavigate('home'); // O a una página de confirmación
  };

  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Finalizar Compra</h2>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2 bg-white p-8 rounded-xl shadow-lg">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Detalles de Envío y Pago</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Nombre Completo:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-green-500 transition"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="address" className="block text-gray-700 text-sm font-bold mb-2">Dirección de Envío:</label>
              <textarea
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                rows="3"
                className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-green-500 transition resize-none"
                required
              ></textarea>
            </div>
            <div className="mb-6">
              <label htmlFor="paymentMethod" className="block text-gray-700 text-sm font-bold mb-2">Método de Pago:</label>
              <select
                id="paymentMethod"
                name="paymentMethod"
                value={formData.paymentMethod}
                onChange={handleChange}
                className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-green-500 transition"
                required
              >
                <option value="">Selecciona un método</option>
                <option value="card">Tarjeta de Crédito/Débito (Simulado)</option>
                <option value="paypal">PayPal (Simulado)</option>
                <option value="yape">Yape (Simulado)</option>
                <option value="plin">Plin (Simulado)</option>
                <option value="pagoefectivo">PagoEfectivo (Simulado)</option>
              </select>
            </div>
            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-lg focus:outline-none focus:shadow-outline transition-colors"
            >
              Confirmar Pago (${total.toFixed(2)})
            </button>
          </form>
        </div>
        <div className="md:w-1/2 bg-gray-50 p-8 rounded-xl shadow-lg">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Resumen del Pedido</h3>
          {cartItems.map(item => (
            <div key={item.id} className="flex justify-between items-center border-b py-2">
              <span className="text-gray-700">{item.name} x {item.quantity}</span>
              <span className="text-gray-800 font-semibold">${(item.price * item.quantity).toFixed(2)}</span>
            </div>
          ))}
          <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-300">
            <span className="text-lg font-bold text-gray-800">Total:</span>
            <span className="text-lg font-bold text-green-700">${total.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckoutSection;