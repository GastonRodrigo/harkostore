import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

export default function ProductDetail({ productos, agregarAlCarrito }) {
  const { id } = useParams();
  const producto = productos.find(p => p.id === parseInt(id));
  const [talleSeleccionado, setTalleSeleccionado] = useState(producto.talles[0] || 'S');
  const [cantidad] = useState(1);

  if (!producto) {
    return <div>Producto no encontrado.</div>;
  }

  const handleAgregarAlCarrito = () => {
    agregarAlCarrito(producto, talleSeleccionado, cantidad); // Asegúrate de pasar la cantidad correcta
  };

  return (
    <div className="container mx-auto p-10 bg-white rounded-lg shadow-lg mt-20">
      <div className="flex flex-col md:flex-row">
        <div className="w-full h-48 mb-4 flex items-center justify-center overflow-hidden">
          <img 
            src={producto.imagen} 
            alt={producto.nombre} 
            className="object-contain max-h-full max-w-full cursor-pointer" 
          />
        </div>
        <div className="ml-0 md:ml-10 mt-4 md:mt-0">
          <h1 className="text-3xl font-bold mb-4">{producto.nombre}</h1>
          <p className="text-sm text-gray-600 mb-2">{producto.descripcion}</p> {/* Breve descripción */}
          <p className="text-lg font-semibold mb-4">${producto.precio}</p>
          <label htmlFor="talle" className="block text-gray-700 font-semibold mb-1">Seleccionar Talle:</label>
          <select
            id="talle"
            value={talleSeleccionado}
            onChange={(e) => setTalleSeleccionado(e.target.value)}
            className="border border-gray-300 rounded px-2 py-1 mb-4"
          >
            {producto.talles.map((talle) => (
              <option key={talle} value={talle}>
                {talle}
              </option>
            ))}
          </select>
          
          <button
            onClick={handleAgregarAlCarrito}
            className="bg-white text-black border border-black py-2 px-4 rounded hover:bg-black hover:text-white transition duration-300"
          >
            Agregar al Carrito
          </button>
        </div>
      </div>
    </div>
  );
}
