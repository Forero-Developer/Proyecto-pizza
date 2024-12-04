import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const AuthModal = ({ onClose }) => {
  const [isLogin, setIsLogin] = useState(true); // Controla si está en modo inicio de sesión o registro
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '', // Solo se utiliza en modo registro
  });

  // Manejar cambios en los inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Manejar envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      console.log('Iniciando sesión con:', formData);
      // Aquí puedes agregar la lógica para enviar los datos al backend
    } else {
      console.log('Registrando usuario con:', formData);
      // Aquí puedes agregar la lógica para enviar los datos de registro
    }
    // Cierra el modal después del envío
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md p-6 relative">
        {/* Botón para cerrar el modal */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          <FontAwesomeIcon icon={faTimes} className="text-xl" />
        </button>

        {/* Título del modal */}
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          {isLogin ? 'Iniciar sesión' : 'Registrarse'}
        </h2>

        {/* Formulario */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {!isLogin && (
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Nombre
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring focus:ring-orange-200"
                placeholder="Tu nombre"
                required
              />
            </div>
          )}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Correo electrónico
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring focus:ring-orange-200"
              placeholder="Correo electrónico"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Contraseña
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring focus:ring-orange-200"
              placeholder="Contraseña"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-2 px-4 rounded-md font-medium hover:bg-orange-600 transition-colors"
          >
            {isLogin ? 'Iniciar sesión' : 'Registrarse'}
          </button>
        </form>

        {/* Cambiar entre "Iniciar sesión" y "Registrarse" */}
        <p className="mt-4 text-center text-sm text-gray-600">
          {isLogin
            ? '¿No tienes cuenta?'
            : '¿Ya tienes una cuenta?'}{' '}
          <button
            type="button"
            onClick={() => setIsLogin(!isLogin)}
            className="text-orange-500 hover:underline focus:outline-none"
          >
            {isLogin ? 'Regístrate aquí' : 'Inicia sesión aquí'}
          </button>
        </p>
      </div>
    </div>
  );
};

export default AuthModal;
