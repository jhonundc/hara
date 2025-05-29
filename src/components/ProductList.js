import React from 'react';
import ProductCard from './ProductCard';
// Ya no importamos products directamente aquí, vienen de App.js

const ProductList = ({ products, onNavigate, onAddToCart }) => {
  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Nuestros Jabones</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map(product => (
          <ProductCard key={product.id} product={product} onNavigate={onNavigate} onAddToCart={onAddToCart} />
        ))}
      </div>
    </section>
  );
};

export default ProductList;

// DONE