import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ProductCard({ producto }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleViewMore = () => {
    navigate(`/productos/${producto.id}`);
  };

  return (
    <div className="relative border rounded-lg shadow-md p-4 transition-transform transform hover:scale-105 flex flex-col">
      <div className="w-full h-48 mb-4 flex items-center justify-center overflow-hidden">
        <img 
          src={producto.imagen} 
          alt={producto.nombre} 
          className="object-contain max-h-full max-w-full cursor-pointer" 
          onClick={toggleModal}
        />
      </div>
      <h2 className="text-xl font-semibold">{producto.nombre}</h2>
      <p className="text-sm text-gray-600 mb-2">{producto.descripcion}</p> {/* Breve descripción */}
      <p className="text-lg font-bold">${producto.precio}</p>
      <div className="flex justify-center items-center mt-5">
        <button 
          onClick={handleViewMore} 
          className="bg-white text-black border border-black py-2 px-4 rounded hover:bg-black hover:text-white transition duration-300 w-full" // Botón ancho completo
        >
          Ver más
        </button>
      </div>

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
