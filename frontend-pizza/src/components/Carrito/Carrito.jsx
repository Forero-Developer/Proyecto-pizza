// src/components/Carrito/Carrito.jsx
import "./Carrito.css"
import { useState, useEffect } from "react";

const Carrito = () => {
  const [productosCarrito, setProductosCarrito] = useState([]);

  // Cargar los productos del carrito desde el almacenamiento local
  useEffect(() => {
    const carritoGuardado = JSON.parse(localStorage.getItem("carrito")) || [];
    setProductosCarrito(carritoGuardado);
  }, []);

  // Eliminar producto del carrito
  const eliminarProducto = (id) => {
    const productosActualizados = productosCarrito.filter(producto => producto.id !== id);
    setProductosCarrito(productosActualizados);
    localStorage.setItem("carrito", JSON.stringify(productosActualizados)); // Actualizar almacenamiento local
  };

  // Calcular el total del carrito
  const calcularTotal = () => {
    return productosCarrito.reduce((total, producto) => total + producto.precio, 0).toFixed(2);
  };

  return (
    <div className="carrito">
      <h2>Mi Carrito</h2>
      {productosCarrito.length > 0 ? (
        <>
          <ul>
            {productosCarrito.map((producto) => (
              <li key={producto.id} className="producto-carrito">
                <img src={producto.imagen} alt={producto.nombre} />
                <span>{producto.nombre}</span>
                <span>${producto.precio}</span>
                <button onClick={() => eliminarProducto(producto.id)}>Eliminar</button>
              </li>
            ))}
          </ul>
          <div className="total">
            <h3>Total: ${calcularTotal()}</h3>
          </div>
          <button className="finalizar-compra">Finalizar Compra</button>
        </>
      ) : (
        <p>No hay productos en el carrito.</p>
      )}
    </div>
  );
};

export default Carrito;
