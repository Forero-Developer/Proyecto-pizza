import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPizzaSlice, faTimes } from '@fortawesome/free-solid-svg-icons';

const AgregarProducto = () => {
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [precio, setPrecio] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const nuevoProducto = {
        nombre,
        descripcion,
        precio: parseFloat(precio),
      };

      setLoading(true);

      const response = await fetch('http://localhost:3000/api/productos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(nuevoProducto),
      });

      setLoading(false);

      if (!response.ok) {
        throw new Error('Error al guardar el producto en la base de datos');
      }

      alert('Producto guardado correctamente');
      setNombre('');
      setDescripcion('');
      setPrecio('');
      setIsOpen(false);
    } catch (error) {
      console.error('Error al guardar el producto:', error);
      setError(error.message);
      setLoading(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 bg-orange-500 text-white p-4 rounded-full shadow-lg hover:bg-orange-600 transition-colors"
        aria-label="Agregar nuevo producto"
      >
        <FontAwesomeIcon icon={faPizzaSlice} className="text-2xl" />
      </button>

      {isOpen && (
        <div className="modal-overlay fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
          <div className="modal-content bg-white rounded-lg shadow-xl w-full max-w-md p-6 relative">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              aria-label="Cerrar"
            >
              <FontAwesomeIcon icon={faTimes} className="text-xl" />
            </button>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">Agregar nuevo producto</h2>

            {error && <p className="text-red-500">{error}</p>}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="nombre" className="block text-sm font-medium text-gray-700">
                  Nombre del Producto:
                </label>
                <input
                  type="text"
                  id="nombre"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring focus:ring-orange-200"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  required
                />
              </div>
              <div>
                <label htmlFor="descripcion" className="block text-sm font-medium text-gray-700">
                  Descripción del Producto:
                </label>
                <input
                  type="text"
                  id="descripcion"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring focus:ring-orange-200"
                  value={descripcion}
                  onChange={(e) => setDescripcion(e.target.value)}
                  required
                />
              </div>
              <div>
                <label htmlFor="precio" className="block text-sm font-medium text-gray-700">
                  Precio:
                </label>
                <input
                  type="number"
                  id="precio"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring focus:ring-orange-200"
                  value={precio}
                  onChange={(e) => setPrecio(e.target.value)}
                  required
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full bg-orange-500 text-white py-2 px-4 rounded-md font-medium hover:bg-orange-600 transition-colors"
                  disabled={loading}
                >
                  {loading ? 'Guardando...' : 'Guardar'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default AgregarProducto;
