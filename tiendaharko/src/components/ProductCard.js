import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExpand } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

export default function ProductCard({ producto, agregarAlCarrito }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTalle, setSelectedTalle] = useState(producto.talle);
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
      <p className="text-gray-700">Talle: 
        <select 
          value={selectedTalle} 
          onChange={(e) => setSelectedTalle(e.target.value)} 
          className="ml-2 border rounded p-1"
        >
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
          <option value="XL">XL</option>
        </select>
      </p>
      <p className="text-lg font-bold">${producto.precio}</p>
      <div className="flex justify-between items-center mt-4">
        <button 
          onClick={() => agregarAlCarrito({ ...producto, talle: selectedTalle })} 
          className="bg-white text-black border border-black py-2 px-4 rounded hover:bg-black hover:text-white transition duration-300"
        >
          Agregar al Carrito
        </button>
        <button 
          onClick={handleViewMore} 
          className="text-blue-600 hover:text-blue-800 transition duration-300"
        >
          <FontAwesomeIcon 
            icon={faExpand} 
            className="text-2xl animate-pulse" 
          />
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
