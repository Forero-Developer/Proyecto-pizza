import Menu from '../cardMenu/menu'; // Importa el componente del menú
import Carrito from './Carrito'; // Importa el componente del carrito

const MenuYCarrito = () => {
  return (
    <div className="menu-y-carrito">
      <div className="menu">
        <h2>Menú de Pizzas</h2>
        <Menu /> 
      </div>
      <div className="carrito">
        <Carrito /> 
      </div>
    </div>
  );
};

export default MenuYCarrito;
