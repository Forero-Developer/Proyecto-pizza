import "./cardMenu.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const CardMenu = ({ producto, agregarAlCarrito, eliminarProducto }) => { // Añadimos eliminarProducto
  const { img = "./src/assets/pizzaaa.jpg", nombre, descripcion, precio, id_producto } = producto;

  return (
    <div className="contenedor-padre">
      <div className="container-target">
        <img src={img} alt={nombre} />
        <div className="nombre-precio">
          <h3>{nombre}</h3>
          <p className="descripcion">{descripcion}</p>
          <p className="precio">${precio}</p>
        </div>
        <div className="botones">
          <button 
            className="bton-carrito"  
            onClick={() => agregarAlCarrito(producto)}  // Llama a la función de agregar
          >
            Agregar al carrito
          </button>
          <button 
            className="bton-eliminar"  
            onClick={() => eliminarProducto(producto.id_producto)}  // Llama a la función de eliminar
          >
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardMenu;
