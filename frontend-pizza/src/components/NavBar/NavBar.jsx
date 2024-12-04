// src/components/NavBar/NavBar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from "../AuthModal/AuthContext"; // Ajusta la ruta según sea necesario
import './NavBar.css';
import AuthModal from '../AuthModal/AuthModal';

const NavBar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { user, logout } = useAuth(); // Obtener el estado del usuario y la función de logout

  const handleModalOpen = () => setIsModalOpen(true);
  const handleModalClose = () => setIsModalOpen(false);

  return (
    <header className="header">
      <div className="logo"></div>
      <nav className="navbar">
        <Link to="/Acerca-de-nostros">Acerca de nosotros</Link>
        <Link to="/Menu">Menú</Link>
        <Link to="/contacto">Contacto</Link>
      </nav>

      <form className="search-form" action="/search" method="get">
        {/* <input type="text" name="query" placeholder="Buscar..." />
        <button type="submit">Buscar</button> */}

        {/* Si el usuario está autenticado, muestra el nombre o un botón para cerrar sesión */}
        {user ? (
  <div className="user-info flex items-center space-x-4">
    {user.nombre ? (
      <span className="text-gray-800 font-medium">{`Hola, ${user.nombre}`}</span>
    ) : (
      <span className="text-gray-500">Usuario</span>
    )}
    <button 
      onClick={logout} 
      className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition-colors"
    >
      Cerrar sesión
    </button>
  </div>
) : (
  <button 
    type="button" 
    onClick={handleModalOpen} 
    className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition-colors"
  >
    Iniciar sesión
  </button>
        )}
      </form>

      {isModalOpen && <AuthModal onClose={handleModalClose} />}
    </header>
  );
};

export default NavBar;
