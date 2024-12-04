import './Contacto.css'; // Importa el CSS para este componente
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa'; // Importar iconos de React Icons

const Contacto = ({ img = "./src/assets/NAVINICIO.png" }) => {
  return (
    <section className="inicio-container">
      <header className="inicio-header">
        <h1 className="tituloContacto">Atretevete a probar </h1>
      </header>

      <h2 className="subtituloContacto">¿Por qué atreverse a probar nuestra pizza?</h2>

      <h2 className="textoContacto">
      En Anttony Pizza no solo ofrecemos una pizza, ofrecemos una experiencia única. ¿Por qué deberías probar nuestra pizza? Porque cada bocado está lleno de sabor, autenticidad y pasión. Usamos solo los ingredientes más frescos y seleccionados, y nuestras recetas, de inspiración italiana, están hechas con todo el cariño y dedicación. Te invitamos a descubrir la combinación perfecta entre lo tradicional y lo innovador, donde cada pizza cuenta una historia de sabor y calidad. Atrévete a vivir la experiencia única de Anttony Pizza y deja que nuestros sabores te conquisten. ¡Tu paladar nunca lo olvidará!
      </h2>

      {/* Información de contacto */}
      <div className="contact-info">
        <div className="contact-item">
          <FaPhoneAlt className="contact-icon" />
          <span className="contact-text">323 477 5690</span> {/* Número de teléfono */}
        </div>
        <div className="contact-item">
          <FaPhoneAlt className="contact-icon" />
          <span className="contact-text">317 327 5009</span> {/* Número de teléfono */}
        </div>
        <div className="contact-item">
          <FaPhoneAlt className="contact-icon" />
          <span className="contact-text">312 264 2113</span> {/* Número de teléfono */}
        </div>
        <div className="contact-item">
          <FaMapMarkerAlt className="contact-icon" />
          <span className="contact-text">Avenida 5 Oeste # 29-02 - Barrio Terron Colorado</span> {/* Dirección */}
        </div>
        <div className="contact-item">
          <FaEnvelope className="contact-icon" />
          <span className="contact-text">contacto@anttonypizza.com</span> {/* Correo electrónico */}
        </div>
      </div>

      {/* Mapa en vivo */}
      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15930.247953984246!2d-76.56159169745284!3d3.456093485086226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e30a5b7817cfbd9%3A0x138f55019018bf5b!2sAv.%205%20Oe.%20%2329-02%2C%20Vista%20Hermosa%2C%20Cali%2C%20Valle%20del%20Cauca!5e0!3m2!1ses!2sco!4v1733284866042!5m2!1ses!2sco"
          width="100%" 
          height="450" 
          style={{ border: '0' }} 
          allowfullscreen="" 
          loading="lazy" 
          referrerpolicy="no-referrer-when-downgrade">
        </iframe>
      </div>
    </section>
  );
};

export default Contacto;
