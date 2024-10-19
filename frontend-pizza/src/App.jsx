import { useEffect, useState } from "react"
import CardMenu from "./components/cardMenu/CardMenu"
import NavBar from "./components/NavBar/NavBar"

const App = () => {

  const [productos, setProductos] = useState([]);
  
  const fetchProductos = async () => {
    try{
      const response = await fetch('http://localhost:3000/api/productos')
      if(!response.ok){
        throw new Error('Error al obtener los datos del servidor!!')
      }
      const data = await response.json()
      console.log(data)
      setProductos(data)
    } catch (error) {
      console.log('Error al obtener los productos!!');
    }
  };

    useEffect(() => {
      fetchProductos();
    }, [])
  return (
    <div>
      <header>
      <NavBar />
      </header>
      <section className="Card-menu">
      {productos.length > 0 ? (
          productos.map((producto, index) => (
            <CardMenu
              key={index}
              img={producto.imagen}      
              descripcion={producto.descripcion}    
              txtComida={producto.nombre || "Descripción no disponible"}
              precio={producto.precio }
            />
          ))
        ) : (
          <p>No se encontraron productos.</p>
        )}
      </section>
    </div>
  )
}

export default App
