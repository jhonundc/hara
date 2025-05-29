import React from 'react';

const ShopHeader = ({ onNavigate, onToggleCart, cartItemCount }) => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">ArteJabón</h1>
        <nav className="flex items-center">
          <button onClick={() => onNavigate('home')} className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors">Inicio</button>
          <button onClick={() => onNavigate('products')} className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors">Productos</button>
          <button onClick={() => onNavigate('about')} className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors">Nosotros</button>
          <button onClick={() => onNavigate('contact')} className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors">Contacto</button>
          <button onClick={() => onNavigate('login')} className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors">Iniciar Sesión</button> {/* Botón de inicio de sesión */}
          <button onClick={onToggleCart} className="ml-4 text-gray-600 hover:text-gray-900 p-2 rounded-full transition-colors relative">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H6L6 6H3a1 1 0 00-1 1v10a1 1 0 001 1h14a1 1 0 001-1V6a1 1 0 00-1-1h-2M7 13l-2.165 2.165A1 1 0 006 17h12a1 1 0 00.754-1.651L17 13H7z" />
            </svg>
            {cartItemCount > 0 && (
              <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
                {cartItemCount}
              </span>
            )}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default ShopHeader;