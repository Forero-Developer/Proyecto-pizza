import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Inicio from './components/NavInicio/inicio';
import { CarritoProvider } from './components/Carrito/ContextoCarrito'; // Asegúrate de que esta ruta es correcta
import MenuYCarrito from './components/Carrito/MenuYcarrito';

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
          <div className="bg-red-500 p-8 text-white">
      <h1>¡TailwindCSS está funcionando!</h1>
    </div>
      </Router>
    </CarritoProvider>  
    
  );
};

export default App;
