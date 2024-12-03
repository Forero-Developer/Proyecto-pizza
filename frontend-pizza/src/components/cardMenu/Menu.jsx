import { useState, useEffect } from 'react';
import { useCarrito } from '../Carrito/ContextoCarrito';
import CardMenu from './CardMenu';

const Menu = () => {
  const [productos, setProductos] = useState([]);
  const { agregarAlCarrito } = useCarrito();

  useEffect(() => {
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

    fetchProductos();
  }, []);

  return (
    <section className="Card-menu">
      {productos.length > 0 ? (
        productos.map((producto) => (
          <CardMenu 
            key={producto.id_producto
            }  // La key debe ser única y generalmente 'id' es la mejor opción
            producto={producto}
            agregarAlCarrito={agregarAlCarrito}
          />
        ))
      ) : (
        <p>No se encontraron productos.</p>
      )}
    </section>
  );
};

export default Menu;
