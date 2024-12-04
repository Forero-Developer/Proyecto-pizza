import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Inicio from './components/NavInicio/inicio';
import { CarritoProvider } from './components/Carrito/ContextoCarrito'; // Asegúrate de que esta ruta es correcta
import MenuYCarrito from './components/Carrito/MenuYcarrito';
import AgregarProducto from './components/AgregarProductos/AgregarProducto';
const App = () => {
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
      <AgregarProducto/>
    </CarritoProvider>  
    
  );
};

export default App;
