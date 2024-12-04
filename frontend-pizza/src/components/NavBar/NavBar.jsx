import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
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
        <button type="submit">BUSCAR</button>
        <button className="login-button">INICAR SESION</button>
      </form>
    </header>
  );
};

export default NavBar;
