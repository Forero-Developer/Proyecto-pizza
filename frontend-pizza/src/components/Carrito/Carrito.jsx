import { useCarrito } from "./ContextoCarrito";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPizzaSlice, faTimes } from "@fortawesome/free-solid-svg-icons";

const Carrito = () => {
  const { carrito, eliminarProducto, resetearCarrito } = useCarrito();

  const calcularTotal = () => {
    return carrito
      .reduce((total, producto) => total + producto.precio * producto.cantidad, 0)
      .toFixed(2);
  };

  const finalizarCompra = () => {
    // Muestra el mensaje de "Pedido Enviado"
    alert("¡Pedido enviado! Gracias por tu compra.");
    
    // Vacía el carrito
    resetearCarrito();
  };

  return (
    <div className="absolute right-20 top-40 bg-white rounded-2xl shadow-xl w-96 p-6 space-y-6">
      <div className="flex items-center justify-between border-b border-orange-100 pb-4">
        <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
          Mi Carrito
        </h2>
      </div>

      {carrito.length > 0 ? (
        <>
          <ul className="space-y-4">
            {carrito.map((producto) => (
              <li key={producto.id_producto} className="bg-orange-50 rounded-xl p-4 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  {/* Ícono de pizza */}
                  <div className="bg-orange-100 p-3 rounded-lg">
                    <FontAwesomeIcon icon={faPizzaSlice} className="text-orange-500 text-xl" />
                  </div>
                  <div>
                    <span className="font-medium text-gray-800">{producto.nombre}</span>
                    <div className="text-sm text-gray-500">Cantidad: {producto.cantidad}</div>
                    <div className="text-orange-500 font-medium">${producto.precio}</div>
                  </div>
                </div>
                <button
                  onClick={() => eliminarProducto(producto.id_producto)}
                  className="text-red-500 hover:text-red-600 transition-colors p-2"
                  aria-label="Eliminar producto"
                >
                  <FontAwesomeIcon icon={faTimes} className="text-lg" />
                </button>
              </li>
            ))}
          </ul>

          <div className="border-t border-orange-100 pt-4 space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-xl font-bold text-gray-800">Total:</span>
              <span className="text-2xl font-bold text-orange-500">${calcularTotal()}</span>
            </div>

            <div className="flex gap-3">
              <button
                onClick={finalizarCompra}
                className="flex-1 bg-orange-500 text-white py-3 px-4 rounded-xl font-medium hover:bg-orange-600 transition-colors"
              >
                Finalizar Compra
              </button>
              <button
                onClick={resetearCarrito}
                className="bg-gray-100 text-gray-600 py-3 px-4 rounded-xl font-medium hover:bg-gray-200 transition-colors"
              >
                Vaciar Carrito
              </button>
            </div>
          </div>
        </>
      ) : (
        <p className="text-gray-500 text-center">No hay productos en el carrito.</p>
      )}
    </div>
  );
};

export default Carrito;
