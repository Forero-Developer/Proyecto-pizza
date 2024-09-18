import './NavBar.css'
const NavBar = () => {
  return (
    <div>
      <header className="header">
        <div href ="/" className="logo"></div>
        

        <nav className="navbar">
            <a href='/'>Inicio</a>
            <a href='/'>Menu</a>
            <a href='/'>Carrito</a>
            <a href='/'>Restaurante</a>
            <a href='/'>Contacto</a>
        </nav>

        <form className="search-form" action="/search" method="get">
        <input type="text" name="query" placeholder="Buscar..."></input>
        <button type="submit">Buscar</button>
        </form>
        <button className="login-button">Iniciar sesión</button>
      </header>

    </div>
  )
}

export default NavBar
