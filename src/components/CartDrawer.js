import React from 'react';

const CartDrawer = ({ isOpen, onClose, cartItems, onRemoveItem, onUpdateQuantity, onNavigate }) => {
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleCheckoutClick = () => {
    onNavigate('checkout');
    onClose(); // Cerrar el carrito al navegar a checkout
  };

  return (
    <div className={`fixed inset-0 bg-black bg-opacity-50 z-20 transition-opacity ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      <div className={`fixed right-0 top-0 w-64 md:w-80 bg-white h-full shadow-xl transform transition-transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-4 border-b flex justify-between items-center">
          <h3 className="text-xl font-bold text-gray-800">Carrito</h3>
          <button onClick={onClose} className="text-gray-600 hover:text-gray-900">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="p-4 flex-grow overflow-y-auto">
          {cartItems.length === 0 ? (
            <p className="text-gray-600 text-center">Tu carrito está vacío.</p>
          ) : (
            cartItems.map(item => (
              <div key={item.id} className="flex items-center justify-between border-b py-3">
                <div>
                  <p className="text-gray-800 font-semibold">{item.name}</p>
                  <p className="text-gray-600 text-sm">${item.price.toFixed(2)}</p>
                  <div className="flex items-center mt-1">
                    <label htmlFor={`quantity-${item.id}`} className="sr-only">Cantidad:</label>
                    <input
                      type="number"
                      id={`quantity-${item.id}`}
                      name="quantity"
                      value={item.quantity}
                      onChange={(e) => onUpdateQuantity(item.id, parseInt(e.target.value, 10))}
                      min="1"
                      className="shadow appearance-none border rounded-lg w-12 py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:ring-1 focus:ring-green-500 transition text-sm"
                    />
                  </div>
                </div>
                <button onClick={() => onRemoveItem(item.id)} className="text-red-600 hover:text-red-800 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
              </div>
            ))
          )}
        </div>
        <div className="p-4 border-t">
          <div className="flex justify-between items-center mb-4">
            <span className="text-lg font-bold text-gray-800">Total:</span>
            <span className="text-lg font-bold text-green-700">${total.toFixed(2)}</span>
          </div>
          <button
            onClick={handleCheckoutClick}
            className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors"
            disabled={cartItems.length === 0} // Deshabilitar si el carrito está vacío
          >
            Proceder al Pago
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartDrawer;