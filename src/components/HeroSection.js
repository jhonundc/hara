import React from 'react';

const HeroSection = ({ onNavigate }) => {
  return (
    <section className="relative bg-gradient-to-r from-green-200 to-blue-200 text-gray-800 py-20 px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">Jabones Artesanales con Amor</h2>
        <p className="text-xl mb-8">Hechos a mano con ingredientes naturales para cuidar tu piel y el planeta.</p>
        <button onClick={() => onNavigate('products')} className="bg-white text-green-700 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transition-colors transform hover:scale-105">
          Explora Nuestros Jabones
        </button>
      </div>
    </section>
  );
};

export default HeroSection;