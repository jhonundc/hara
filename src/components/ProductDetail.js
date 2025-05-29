import React, { useState } from 'react';
import { products } from '../mock/products';

const ProductDetail = ({ productId, onNavigate, onAddToCart }) => {
  const product = products.find(p => p.id === productId);
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Producto no encontrado</h2>
        <button onClick={() => onNavigate('products')} className="text-green-600 hover:underline">Volver a la lista de productos</button>
      </div>
    );
  }

  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value, 10);
    if (value > 0) {
      setQuantity(value);
    }
  };

  const handleAddToCartClick = () => {
    onAddToCart(product.id, quantity);
    setQuantity(1); // Reset quantity after adding to cart
  };

  return (
    <section className="container mx-auto px-4 py-12">
      <button onClick={() => onNavigate('products')} className="text-green-600 hover:underline mb-8 flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
        Volver a Productos
      </button>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2">
          <img src={product.image} alt={product.name} className="w-full h-auto rounded-xl shadow-lg" />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">{product.name}</h2>
          <p className="text-2xl font-semibold text-green-700 mb-6">${product.price.toFixed(2)}</p>
          <p className="text-gray-700 text-lg mb-6">{product.description}</p>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Ingredientes:</h3>
          <ul className="list-disc list-inside text-gray-600 mb-6">
            {product.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
          <div className="flex items-center mb-6">
            <label htmlFor="quantity" className="block text-gray-700 text-sm font-bold mr-2">Cantidad:</label>
            <input
              type="number"
              id="quantity"
              name="quantity"
              value={quantity}
              onChange={handleQuantityChange}
              min="1"
              className="shadow appearance-none border rounded-lg w-16 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-green-500 transition"
            />
          </div>
          <button onClick={handleAddToCartClick} className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg focus:outline-none focus:shadow-outline transition-colors">
            Agregar al Carrito
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;