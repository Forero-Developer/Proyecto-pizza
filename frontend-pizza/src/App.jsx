import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Menu from './components/cardMenu/menu';
import Inicio from './components/NavInicio/inicio';
import Carrito from './components/Carrito/Carrito';
// Componente de la página de inicio

const App = () => {
  return (
    <Router>
      <header>
        <NavBar />
      </header>
      
      <Routes>
        <Route path="/Acerca-de-nostros" element={<Inicio />} />
        <Route path="/Menu" element={<Menu />} />  {/* Usa el componente separado */}
      </Routes>
      
    </Router>
  );
};

export default App;
