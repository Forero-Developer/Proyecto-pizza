import './Inicio.css'; // Importa el CSS para este componente

const Inicio = ({img = "./src/assets/PIZZA-PORTADA.jpg"}) => {
  return (
    <section className="inicio-container">
      <header className="inicio-header">
        <h1>Bienvenidos a la mejor pizza de la ciudad</h1>
        <p className="eslogan">Sabor que te hace sonreír</p>
      </header>
      <img
          src={img} // Aquí coloca la imagen que deseas usar
          alt="Pizza deliciosa"
        />
    </section>
  );
};

export default Inicio;
