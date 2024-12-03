import "./cardMenu.css";
const CardMenu = ({ producto, agregarAlCarrito }) => {   // Recibe 'producto' como prop
  const { img = "./src/assets/pizzaaa.jpg", nombre, descripcion, precio } = producto; // Desestructura

  return (
    <div className="contenedor-padre">
      <div className="container-target">
        <img src={img} alt={nombre} />
        <div className="nombre-precio">
          <h3>{nombre}</h3>
          <p className="descripcion">{descripcion}</p>
          <p className="precio">${precio}</p>
        </div>
        <button 
          className="bton-carrito"  
          onClick={() => agregarAlCarrito(producto)}  // Pasa el producto al carrito
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default CardMenu;
