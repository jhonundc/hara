import React, { useState, useEffect } from 'react';
import ShopHeader from './components/ShopHeader';
import HeroSection from './components/HeroSection';
import ProductList from './components/ProductList';
import AboutSection from './components/AboutSection';
import ContactForm from './components/ContactForm';
import ShopFooter from './components/ShopFooter';
import ProductDetail from './components/ProductDetail';
import CartDrawer from './components/CartDrawer';
import CheckoutSection from './components/CheckoutSection';
import AuthLogin from './components/AuthLogin';
import AuthRegister from './components/AuthRegister';
import { products as mockProducts } from './mock/products'; // Renombrar para evitar conflicto
import { fetchProducts } from './utils/api'; // Importar la función simulada de API

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState([]); // Estado para los productos obtenidos (simulados)

  // Cargar productos al iniciar la app (simulando llamada a API)
  useEffect(() => {
    const loadProducts = async () => {
      const result = await fetchProducts();
      if (result.success) {
        setProducts(result.products);
      } else {
        console.error('Error al cargar productos (simulado)');
        // Fallback a mock data si la "API" falla
        setProducts(mockProducts);
      }
    };
    loadProducts();
  }, []); // El array vacío asegura que esto solo se ejecute una vez al montar

  const handleNavigate = (page, productId = null) => {
    setCurrentPage(page);
    setSelectedProductId(productId);
    setIsCartOpen(false); // Cerrar carrito al navegar
  };

  const handleToggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const handleAddToCart = (productId, quantity = 1) => {
    const existingItemIndex = cartItems.findIndex(item => item.id === productId);

    if (existingItemIndex > -1) {
      // Si el producto ya está en el carrito, actualizar la cantidad
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingItemIndex].quantity += quantity;
      setCartItems(updatedCartItems);
    } else {
      // Si el producto no está en el carrito, agregarlo con la cantidad especificada
      const productToAdd = products.find(p => p.id === productId);
      if (productToAdd) {
        setCartItems([...cartItems, { ...productToAdd, quantity }]);
      }
    }
  };

  const handleRemoveFromCart = (productId) => {
    setCartItems(cartItems.filter(item => item.id !== productId));
  };

  const handleUpdateQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      handleRemoveFromCart(productId);
    } else {
      const updatedCartItems = cartItems.map(item =>
        item.id === productId ? { ...item, quantity } : item
      );
      setCartItems(updatedCartItems);
    }
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <>
            <HeroSection onNavigate={handleNavigate} />
            <ProductList products={products} onNavigate={handleNavigate} onAddToCart={handleAddToCart} /> {/* Pasar productos */}
            <AboutSection />
          </>
        );
      case 'products':
        return <ProductList products={products} onNavigate={handleNavigate} onAddToCart={handleAddToCart} />; {/* Pasar productos */}
      case 'about':
        return <AboutSection />;
      case 'contact':
        return <ContactForm />;
      case 'productDetail':
        return <ProductDetail productId={selectedProductId} onNavigate={handleNavigate} onAddToCart={handleAddToCart} />;
      case 'checkout':
        return <CheckoutSection cartItems={cartItems} onNavigate={handleNavigate} />;
      case 'login':
        return <AuthLogin onNavigate={handleNavigate} />;
      case 'register':
        return <AuthRegister onNavigate={handleNavigate} />;
      default:
        return (
          <div className="container mx-auto px-4 py-12 text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Página no encontrada</h2>
            <button onClick={() => handleNavigate('home')} className="text-green-600 hover:underline">Volver al inicio</button>
          </div>
        );
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <ShopHeader onNavigate={handleNavigate} onToggleCart={handleToggleCart} cartItemCount={cartItems.length} />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <ShopFooter />
      <CartDrawer
        isOpen={isCartOpen}
        onClose={handleToggleCart}
        cartItems={cartItems}
        onRemoveItem={handleRemoveFromCart}
        onUpdateQuantity={handleUpdateQuantity}
        onNavigate={handleNavigate}
      />
    </div>
  );
};

export default App;