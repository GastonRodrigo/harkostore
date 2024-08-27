import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

export default function ProductDetail({ productos, agregarAlCarrito }) {
  const { id } = useParams();
  const producto = productos.find(p => p.id === parseInt(id));
  const [talleSeleccionado, setTalleSeleccionado] = useState(producto.talles[0] || 'S');
  const [cantidad] = useState(1);
  const [imagenAmpliada, setImagenAmpliada] = useState(false);

  if (!producto) {
    return <div>Producto no encontrado.</div>;
  }

  const handleAgregarAlCarrito = () => {
    agregarAlCarrito(producto, talleSeleccionado, cantidad);
  };

  const toggleImagenAmpliada = () => {
    setImagenAmpliada(!imagenAmpliada);
  };

  const handleOutsideClick = (e) => {
    if (imagenAmpliada && !e.target.closest('.imagen-ampliada')) {
      setImagenAmpliada(false);
    }
  };

  return (
    <div 
      className="container mx-auto p-4 bg-white rounded-lg shadow-lg mt-10"
      onClick={handleOutsideClick}
    >
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 h-64 md:h-auto mb-4 flex items-center justify-center overflow-hidden">
          <img 
            src={producto.imagen} 
            alt={producto.nombre} 
            className={`object-contain max-h-full max-w-full cursor-pointer ${imagenAmpliada ? 'fixed top-0 left-0 w-full h-full z-50 bg-white p-4 imagen-ampliada' : ''}`} 
            onClick={toggleImagenAmpliada}
          />
        </div>
        <div className="md:w-1/2 ml-0 md:ml-10 mt-4 md:mt-0">
          <h1 className="text-2xl font-bold mb-2 text-black">{producto.nombre}</h1>
          <p className="text-sm text-gray-600 mb-4">{producto.descripcion}</p>
          <p className="text-xl font-semibold mb-4 text-black">${producto.precio}</p>
          <label className="block text-gray-700 font-semibold mb-2">Seleccionar Talle:</label>
          <div className="grid grid-cols-4 gap-2 mb-4">
            {producto.talles.map((talle) => (
              <div
                key={talle}
                onClick={() => setTalleSeleccionado(talle)}
                className={`cursor-pointer border rounded py-2 text-center ${
                  talleSeleccionado === talle ? 'bg-black text-white' : 'bg-white text-black'
                }`}
              >
                {talle}
              </div>
            ))}
          </div>
          
          <button
            onClick={handleAgregarAlCarrito}
            className="bg-white text-black border border-black py-2 px-4 rounded hover:bg-black hover:text-white transition duration-300 w-full"
          >
            Agregar al Carrito
          </button>
        </div>
      </div>
    </div>
  );
}