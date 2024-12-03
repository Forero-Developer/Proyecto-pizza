import { createContext, useContext, useState, useEffect } from 'react';

const CarritoContext = createContext();

// Hook personalizado para usar el contexto
export const useCarrito = () => useContext(CarritoContext);

export const CarritoProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);

  // Cargar carrito desde localStorage al iniciar
  useEffect(() => {
    const carritoGuardado = JSON.parse(localStorage.getItem('carrito')) || [];
    setCarrito(carritoGuardado);
  }, []);

  const resetearCarrito = () => {
    setCarrito([]);  // Vaciar el carrito en el estado
    localStorage.removeItem('carrito');  // Eliminar el carrito del localStorage
  };

  // Función para agregar un producto al carrito
  const agregarAlCarrito = (producto) => {
  setCarrito((prevCarrito) => {
    const carritoActualizado = prevCarrito.map((item) => {
      if (item.id_producto === producto.id_producto) {
        // Aumenta la cantidad del producto existente
        return { ...item, cantidad: item.cantidad + 1 };
      }
      return item;
    });

    // Verificar si el producto no estaba en el carrito antes de agregarlo
    const productoExistente = prevCarrito.find(item => item.id_producto === producto.id_producto);
    if (!productoExistente) {
      carritoActualizado.push({ ...producto, cantidad: 1 });
    }

    // Guardar el carrito actualizado en localStorage
    localStorage.setItem('carrito', JSON.stringify(carritoActualizado));

    return carritoActualizado;
  });
};


  // Función para eliminar un producto del carrito
  const eliminarProducto = (id_producto) => {
    setCarrito((prevCarrito) => {
      const carritoActualizado = prevCarrito.map((producto) => {
        // Verifica si es el producto a eliminar
        if (producto.id_producto === id_producto) {
          // Si la cantidad es mayor a 1, reduce la cantidad
          if (producto.cantidad > 1) {
            return { ...producto, cantidad: producto.cantidad - 1 };
          }
          // Si la cantidad es 1, no se incluye en el nuevo carrito
          return null; // Marcamos para eliminarlo en el siguiente paso
        }
        return producto;
      }).filter(producto => producto !== null); // Elimina productos marcados como null
  
      // Guardar el carrito actualizado en localStorage
      localStorage.setItem('carrito', JSON.stringify(carritoActualizado));
  
      return carritoActualizado;
    });
  };

  return (
    <CarritoContext.Provider value={{ carrito, agregarAlCarrito, eliminarProducto, resetearCarrito }}>
      {children}
    </CarritoContext.Provider>
  );
};
