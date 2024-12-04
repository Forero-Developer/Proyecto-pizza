import { useState, useEffect } from 'react';
import { useCarrito } from '../Carrito/ContextoCarrito';
import CardMenu from './CardMenu';

const Menu = () => {
  const [productos, setProductos] = useState([]);
  const { agregarAlCarrito } = useCarrito();

  useEffect(() => {
    fetchProductos();  
  }, []);

  const fetchProductos = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/productos');
      if (!response.ok) {
        throw new Error('Error al obtener los datos del servidor');
      }
      const data = await response.json();
      setProductos(data);
    } catch (error) {
      console.log('Error al obtener los productos:', error.message);
    }
  };

  const eliminarProducto = async (id) => {
    // Confirmación antes de proceder
    if (!window.confirm('¿Estás seguro de eliminar este producto?')) return;
  
    try {
      console.log(`Intentando eliminar el producto con ID: ${id}`);  // Verifica que el ID sea correcto
  
      const response = await fetch(`http://localhost:3000/api/productos/${id}`, {
        method: 'DELETE',
      });
      console.log(await response.json());
  
      // Verifica si la respuesta del servidor es exitosa
      if (!response.ok) {
        // Respuesta específica si el producto no se encuentra
        if (response.status === 404) {
          throw new Error('Producto no encontrado');
        }
        // Otros errores
        throw new Error('Error al eliminar el producto');
      }
  
      // Actualiza la lista de productos en el frontend
      setProductos((productos) => productos.filter(producto => producto.id_producto !== id));
      
      alert('Producto eliminado correctamente');
    } catch (error) {
      console.error('Error al eliminar el producto:', error.message);
      alert(`No se pudo eliminar el producto: ${error.message}`);
    }
  };
  

  return (
    <section className="Card-menu">
      {productos.length > 0 ? (
        productos.map((producto) => (
          <CardMenu 
            key={producto.id_producto}  // La key debe ser única
            producto={producto}
            agregarAlCarrito={agregarAlCarrito}
            eliminarProducto={eliminarProducto}  // Pasamos la función de eliminar
          />
        ))
      ) : (
        <p>No se encontraron productos.</p>
      )}
    </section>
  );
};

export default Menu;
