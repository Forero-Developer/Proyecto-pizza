import { useCarrito } from "./ContextoCarrito";
import "./Carrito.css";

const Carrito = () => {
  const { carrito, eliminarProducto, resetearCarrito } = useCarrito();

  const calcularTotal = () => {
    return carrito
      .reduce((total, producto) => total + producto.precio * producto.cantidad, 0)
      .toFixed(2);
  };

  return (
    <div>
      <h2>Mi Carrito</h2>
      {carrito.length > 0 ? (
        <>
          <ul>
            {carrito.map((producto) => (
              <li key={producto.id_producto} className="producto-carrito">
                <img src={producto.imagen} alt={producto.nombre} />
                <div>
                  <span>{producto.nombre}</span>
                  <span>${producto.precio}</span>
                  <span>Cantidad: {producto.cantidad}</span>
                </div>
                <button onClick={() => eliminarProducto(producto.id_producto)}>Eliminar</button> {/* Cambio aquí */}
              </li>
            ))}
          </ul>
          <div className="total">
            <h3>Total: ${calcularTotal()}</h3>
          </div>
          <button className="finalizar-compra">Finalizar Compra</button>
          <button onClick={resetearCarrito}>Vaciar Carrito</button>
        </>
      ) : (
        <p>No hay productos en el carrito.</p>
      )}
    </div>
  );
};

export default Carrito;
