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
    <CarritoProvider> {/* Envuelve todo con CarritoProvider */}
      <Router>
        <header>
          <NavBar />
        </header>

        <Routes>
          <Route path="/Acerca-de-nostros" element={<Inicio />} />
          <Route path="/Menu" element={<MenuYCarrito /> } />
          
          </Routes>
      </Router>
    </CarritoProvider>  
  );
};

export default App
