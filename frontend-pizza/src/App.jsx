// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar'; // Asegúrate de que el NavBar está importado correctamente
import Inicio from './components/NavInicio/inicio'; // Componente de inicio
import { CarritoProvider } from './components/Carrito/ContextoCarrito'; // Proveedor del carrito
import MenuYCarrito from './components/Carrito/MenuYcarrito'; // Componente de menú y carrito
import AgregarProducto from './components/AgregarProductos/AgregarProducto'; // Componente para agregar productos
import { AuthProvider } from './components/AuthModal/AuthContext'; // Proveedor de autenticación

const App = () => {
  return (
    <AuthProvider> {/* Envuelve toda la aplicación con AuthProvider */}
      <CarritoProvider> {/* Envuelve todo con CarritoProvider */}
        <Router>
          <header>
            <NavBar /> {/* El NavBar estará disponible en todas las páginas */}
          </header>

          <Routes>
            <Route path="/Acerca-de-nostros" element={<Inicio />} />
            <Route path="/Menu" element={<MenuYCarrito />} />
           
          </Routes>
        </Router>
        <AgregarProducto />
      </CarritoProvider>
    </AuthProvider>
  );
};

export default App;
