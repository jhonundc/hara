import React from 'react';

const ProductCard = ({ product, onNavigate, onAddToCart }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-transform hover:scale-105">
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-4">{product.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold text-green-700">${product.price.toFixed(2)}</span>
          <button onClick={() => onNavigate('productDetail', product.id)} className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg text-sm hover:bg-gray-300 transition-colors">Ver Detalles</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;