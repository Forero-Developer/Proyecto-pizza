import './Inicio.css'; // Importa el CSS para este componente

const Inicio = ({ img = "./src/assets/NAVINICIO.png" }) => {
  return (
    <section className="inicio-container">
      <header className="inicio-header">
      <h1 className="titulo">Anttony Pizza</h1>
      </header>
      <h2 className="subtitulo1">En Anttony Pizza, nuestra pasión es llevar la auténtica experiencia de la comida italiana directamente a tu mesa.</h2>
      <h2 className="texto1">Ubicados en el corazón de Cali, nos dedicamos a combinar ingredientes frescos, recetas tradicionales y un toque de creatividad para ofrecer pizzas y platillos que no solo alimentan, sino que crean momentos inolvidables. Nuestra cocina se inspira en las raíces italianas, utilizando técnicas artesanales que respetan la tradición y celebran la innovación culinaria.</h2>
      <h2 className="subtitulo2">Calidad en cada bocado</h2>
      <h2 className="texto2">En Anttony Pizza creemos que una buena pizza comienza con una base perfecta: masa fresca elaborada diariamente, salsa de tomate preparada con los mejores tomates italianos y una selección de quesos de alta calidad que se derriten en el paladar. A esto, le añadimos una variedad de ingredientes premium que se combinan para crear sabores únicos que encantan a todos, desde los amantes de lo clásico hasta los que buscan opciones más atrevidas.</h2>
      <h2 className="subtitulo3">Nuestro compromiso</h2>
      <h2 className="texto3">Cada pizza que sale de nuestro horno lleva consigo nuestro compromiso con la excelencia. No solo se trata de ofrecer comida deliciosa, sino también de brindar un servicio cálido y un ambiente acogedor donde las familias, amigos y parejas puedan disfrutar de momentos especiales. Ya sea que nos visites para una cena tranquila, una celebración o simplemente para darte un gusto, queremos que cada experiencia en Anttony Pizza sea memorable.</h2>
      <h2 className="subtitulo4">Más que pizza</h2>
      <h2 className="texto4">Aunque nuestra especialidad es la pizza, nuestro menú incluye una selección de platillos italianos cuidadosamente elaborados: pastas cremosas, ensaladas frescas y postres irresistibles que complementan perfectamente cualquier comida. Además, ofrecemos opciones para todos los gustos, incluyendo alternativas vegetarianas y personalizables.</h2>
      <h2 className="subtitulo5">Nuestra visión: una comunidad feliz</h2>
      <h2 className="texto5">En Anttony Pizza no solo hacemos comida, construimos conexiones. Queremos ser más que un restaurante; queremos ser un lugar donde los vecinos, visitantes y amigos se reúnan para disfrutar de buenos momentos. Es por eso que nos esforzamos por apoyar a nuestra comunidad local y fomentar un ambiente inclusivo y alegre.</h2>
    </section>
  );
};

export default Inicio;
