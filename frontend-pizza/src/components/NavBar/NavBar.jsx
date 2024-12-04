import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import AuthModal from '../AuthModal/AuthModal'; // Importar el componente del modal

const NavBar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // Estado para controlar el modal

  // Función para abrir el modal
  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  // Función para cerrar el modal
  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <header className="header">
      <div className="logo"></div>

      <nav className="navbar">
        <Link to="/Acerca-de-nostros">Acerca de nosotros</Link>
        <Link to="/Menu">Menú</Link>
        <Link to="/contacto">Contacto</Link>
      </nav>

      <form className="search-form" action="/search" method="get">
        <input type="text" name="query" placeholder="Buscar..." />
        <button type="submit">Buscar</button>
        <button
          type="button"
          onClick={handleModalOpen} // Abre el modal al hacer clic en el botón
          className="login-button"
        >
          Iniciar sesión
        </button>
      </form>

      {/* Renderiza el modal cuando isModalOpen sea true */}
      {isModalOpen && <AuthModal onClose={handleModalClose} />}
    </header>
  );
};

export default NavBar;
