import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function ProductCard({ producto }) {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const handleViewMore = () => {
    navigate(`/productos/${producto.id}`);
  };

  return (
    <motion.div 
      className="relative border rounded-lg shadow-md overflow-hidden"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="w-full h-64 relative overflow-hidden">
        <motion.img 
          src={producto.imagen} 
          alt={producto.nombre} 
          className="object-cover w-full h-full cursor-pointer"
          animate={{ scale: isHovered ? 1.1 : 1 }}
          transition={{ duration: 0.3 }}
        />
        <motion.div 
          className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <button 
            onClick={handleViewMore}
            className="bg-white text-black py-2 px-4 rounded hover:bg-black hover:text-white transition duration-300"
          >
            Ver más
          </button>
        </motion.div>
      </div>
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{producto.nombre}</h2>
        <p className="text-sm text-gray-600 mb-2">{producto.descripcion}</p>
        <p className="text-lg font-bold">${producto.precio}</p>
      </div>
    </motion.div>
  );
}