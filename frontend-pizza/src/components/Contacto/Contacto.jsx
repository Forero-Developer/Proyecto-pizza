import React from 'react';
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';

const Contacto = () => {
  return (
<div className="min-h-screen bg-gradient-to-br from-orange-400 to-orange-600 text-white py-28 px-4 sm:px-6 lg:px-8">
<div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 text-yellow-300">Atrévete a probar</h1>
          <h2 className="text-3xl font-semibold mb-6 text-yellow-100">¿Por qué atreverse a probar nuestra pizza?</h2>
        </div>

        <div className="lg:flex lg:items-center lg:justify-between">
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <p className="text-lg leading-relaxed mb-6">
              En Anttony Pizza no solo ofrecemos una pizza, ofrecemos una experiencia única. 
              Cada bocado está lleno de sabor, autenticidad y pasión. Usamos solo los ingredientes 
              más frescos y seleccionados, y nuestras recetas, de inspiración italiana, están 
              hechas con todo el cariño y dedicación.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              Te invitamos a descubrir la combinación perfecta entre lo tradicional y lo innovador, 
              donde cada pizza cuenta una historia de sabor y calidad. Atrévete a vivir la experiencia 
              única de Anttony Pizza y deja que nuestros sabores te conquisten. ¡Tu paladar nunca lo olvidará!
            </p>
          </div>
          
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white bg-opacity-20 rounded-lg p-6 backdrop-filter backdrop-blur-lg">
            <FaPhoneAlt className="text-4xl text-yellow-300 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Teléfonos</h3>
            <p>323 477 5690</p>
            <p>317 327 5009</p>
            <p>312 264 2113</p>
          </div>
          <div className="bg-white bg-opacity-20 rounded-lg p-6 backdrop-filter backdrop-blur-lg">
            <FaMapMarkerAlt className="text-4xl text-yellow-300 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Dirección</h3>
            <p>Avenida 5 Oeste # 29-02</p>
            <p>Barrio Terron Colorado</p>
          </div>
          <div className="bg-white bg-opacity-20 rounded-lg p-6 backdrop-filter backdrop-blur-lg">
            <FaEnvelope className="text-4xl text-yellow-300 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Correo</h3>
            <p>contacto@anttonypizza.com</p>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-semibold mb-6 text-center">Encuéntranos aquí</h3>
          <div className="rounded-lg overflow-hidden shadow-2xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15930.247953984246!2d-76.56159169745284!3d3.456093485086226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e30a5b7817cfbd9%3A0x138f55019018bf5b!2sAv.%205%20Oe.%20%2329-02%2C%20Vista%20Hermosa%2C%20Cali%2C%20Valle%20del%20Cauca!5e0!3m2!1ses!2sco!4v1733284866042!5m2!1ses!2sco"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacto;

