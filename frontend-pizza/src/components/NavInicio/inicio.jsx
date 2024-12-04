import React from "react";
import { FaPizzaSlice, FaHeart, FaUsers, FaUtensils, FaEye } from "react-icons/fa";

const Inicio = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-400 to-orange-600 text-white py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-16">
          <h1 className="text-6xl font-bold mb-4 text-yellow-300">Anttony Pizza</h1>
          <p className="text-2xl font-semibold text-yellow-100">
            En Anttony Pizza, nuestra pasión es llevar la auténtica experiencia de la comida italiana directamente a tu mesa.
          </p>
        </header>

        <div className="grid gap-12 md:grid-cols-2 items-center mb-16">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              Ubicados en el corazón de Cali, nos dedicamos a combinar ingredientes frescos, recetas tradicionales y un toque de creatividad para ofrecer pizzas y platillos que no solo alimentan, sino que crean momentos inolvidables. Nuestra cocina se inspira en las raíces italianas, utilizando técnicas artesanales que respetan la tradición y celebran la innovación culinaria.
            </p>
          </div>
          <div className="relative h-96 rounded-xl overflow-hidden shadow-2xl">
            <img
              src="/src/assets/pizzaaa.jpg" // Asegúrate de reemplazarlo con la ruta correcta
              alt="Anttony Pizza Restaurant"
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-8 shadow-xl transition-transform duration-300 hover:scale-105">
            <FaPizzaSlice className="text-5xl text-yellow-300 mb-4" />
            <h2 className="text-2xl font-semibold mb-4 text-yellow-200">Calidad en cada bocado</h2>
            <p className="text-lg leading-relaxed">
              En Anttony Pizza creemos que una buena pizza comienza con una base perfecta: masa fresca elaborada diariamente, salsa de tomate preparada con los mejores tomates italianos y una selección de quesos de alta calidad que se derriten en el paladar. A esto, le añadimos una variedad de ingredientes premium que se combinan para crear sabores únicos que encantan a todos, desde los amantes de lo clásico hasta los que buscan opciones más atrevidas.
            </p>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-8 shadow-xl transition-transform duration-300 hover:scale-105">
            <FaHeart className="text-5xl text-yellow-300 mb-4" />
            <h2 className="text-2xl font-semibold mb-4 text-yellow-200">Nuestro compromiso</h2>
            <p className="text-lg leading-relaxed">
              Cada pizza que sale de nuestro horno lleva consigo nuestro compromiso con la excelencia. No solo se trata de ofrecer comida deliciosa, sino también de brindar un servicio cálido y un ambiente acogedor donde las familias, amigos y parejas puedan disfrutar de momentos especiales. Ya sea que nos visites para una cena tranquila, una celebración o simplemente para darte un gusto, queremos que cada experiencia en Anttony Pizza sea memorable.
            </p>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-8 shadow-xl transition-transform duration-300 hover:scale-105">
            <FaUtensils className="text-5xl text-yellow-300 mb-4" />
            <h2 className="text-2xl font-semibold mb-4 text-yellow-200">Más que pizza</h2>
            <p className="text-lg leading-relaxed">
              Aunque nuestra especialidad es la pizza, nuestro menú incluye una selección de platillos italianos cuidadosamente elaborados: pastas cremosas, ensaladas frescas y postres irresistibles que complementan perfectamente cualquier comida. Además, ofrecemos opciones para todos los gustos, incluyendo alternativas vegetarianas y personalizables.
            </p>
          </div>
        </div>

        <div className="mt-16 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-8 shadow-xl">
          <div className="flex items-center justify-center mb-6">
            <FaEye className="text-5xl text-yellow-300 mr-4" />
            <h2 className="text-3xl font-semibold text-yellow-200">Nuestra visión: una comunidad feliz</h2>
          </div>
          <p className="text-lg leading-relaxed text-center">
            En Anttony Pizza no solo hacemos comida, construimos conexiones. Queremos ser más que un restaurante; queremos ser un lugar donde los vecinos, visitantes y amigos se reúnan para disfrutar de buenos momentos. Es por eso que nos esforzamos por apoyar a nuestra comunidad local y fomentar un ambiente inclusivo y alegre.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Inicio;
