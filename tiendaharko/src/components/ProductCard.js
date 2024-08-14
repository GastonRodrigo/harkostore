import React, { useState } from 'react';

export default function ProductCard({ producto, agregarAlCarrito }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="relative border rounded-lg shadow-md p-4 transition-transform transform hover:scale-105">
      <img 
        src={producto.imagen} 
        alt={producto.nombre} 
        className="w-full h-48 object-cover mb-4 cursor-pointer" 
        onClick={toggleModal}
      />
      <h2 className="text-xl font-semibold">{producto.nombre}</h2>
      <p className="text-gray-700">Talle: {producto.talle}</p>
      <p className="text-lg font-bold">${producto.precio}</p>
      <button 
        onClick={() => agregarAlCarrito(producto)} 
        className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
      >
        Agregar al Carrito
      </button>

      {isModalOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 transition-opacity duration-300"
          onClick={toggleModal}
        >
          <div className="relative">
            <img 
              src={producto.imagen} 
              alt={producto.nombre} 
              className="max-w-full max-h-screen object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
}
