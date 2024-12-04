// src/components/AuthModal/AuthModal.js
import React, { useState } from 'react';
import { useAuth } from "../AuthModal/AuthContext"; // Ajusta la ruta según sea necesario

const AuthModal = ({ onClose }) => {
  const { login } = useAuth(); // Función para iniciar sesión
  const [isLogin, setIsLogin] = useState(true); // Controla si está en modo inicio de sesión o registro
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    nombre: '',
    apellido: '',  // Agregado
    telefono: '',     // Agregado
    direccion: '',   // Agregado
    rol: '',      // Agregado (cliente o empleado)
  });
  const [error, setError] = useState(null); // Estado para manejar errores

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = isLogin ? 'http://localhost:3000/api/login' : 'http://localhost:3000/api/registro'; // URL de la API

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData), // Enviar los datos del formulario como JSON
      });

      if (!response.ok) {
        throw new Error('Error en la autenticación');
      }

      const data = await response.json();

      if (isLogin) {
        // Si es un inicio de sesión exitoso, guarda el token y el usuario
        login({ nombre: data.nombre, email: data.email, token: data.token }); // Aquí se asume que el backend devuelve un token
        localStorage.setItem('authToken', data.token); // Guardamos el token en localStorage
        onClose(); // Cerrar el modal al iniciar sesión
      } else {
        console.log('Registro exitoso', data);
        onClose(); // Cerrar el modal después del registro
      }
    } catch (err) {
      setError(err.message); // Si ocurre un error, guarda el mensaje
      console.error(err);
    }
  };

  const handleOutsideClick = (e) => {
    // Verifica si el clic ocurrió fuera del modal
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
      onClick={handleOutsideClick} // Escucha el clic en el fondo
    >
      <div className="bg-white p-6 rounded-lg w-96 shadow-xl" onClick={(e) => e.stopPropagation()}>
        {/* Cerrar el modal al hacer clic en el botón */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
        >
          ✕
        </button>
        <h2 className="text-2xl font-semibold text-center mb-4">{isLogin ? 'Iniciar sesión' : 'Registrarse'}</h2>
        
        {/* Mostrar errores */}
        {error && <div className="text-red-500 text-sm text-center mb-4">{error}</div>}

        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <>
              <div className="mb-4">
                <label htmlFor="nombre" className="block text-sm font-medium text-gray-700">Nombre</label>
                <input
                  type="text"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  placeholder="Tu nombre"
                  required
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="apellido" className="block text-sm font-medium text-gray-700">Apellido</label>
                <input
                  type="text"
                  name="apellido"
                  value={formData.apellido}
                  onChange={handleChange}
                  placeholder="Tu apellido"
                  required
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="telefono" className="block text-sm font-medium text-gray-700">Teléfono</label>
                <input
                  type="tel"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleChange}
                  placeholder="Tu teléfono"
                  required
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="direccion" className="block text-sm font-medium text-gray-700">Dirección</label>
                <input
                  type="text"
                  name="direccion"
                  value={formData.direccion}
                  onChange={handleChange}
                  placeholder="Tu dirección"
                  required
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="rol" className="block text-sm font-medium text-gray-700">Rol</label>
                <select
                  name="rol"
                  value={formData.rol}
                  onChange={handleChange}
                  required
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                >
                  <option value="">Selecciona tu rol</option>
                  <option value="cliente">Cliente</option>
                  <option value="empleado">Empleado</option>
                </select>
              </div>
            </>
          )}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Correo electrónico</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Correo electrónico"
              required
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Contraseña</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Contraseña"
              required
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            />
          </div>
          <button type="submit" className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
            {isLogin ? 'Iniciar sesión' : 'Registrarse'}
          </button>
        </form>
        
        <p className="mt-4 text-center text-sm text-gray-600">
          {isLogin ? '¿No tienes cuenta?' : '¿Ya tienes cuenta?'}{' '}
          <button type="button" onClick={() => setIsLogin(!isLogin)} className="text-blue-500 hover:underline">
            {isLogin ? 'Regístrate aquí' : 'Inicia sesión aquí'}
          </button>
        </p>
      </div>
    </div>
  );
};

export default AuthModal;
