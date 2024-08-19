import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

export default function ProductDetail({ productos, agregarAlCarrito }) {
  const { id } = useParams();
  const producto = productos.find(p => p.id === parseInt(id));
  const [talleSeleccionado, setTalleSeleccionado] = useState(producto.talle);
  const [cantidad, setCantidad] = useState(1);

  if (!producto) {
    return <div>Producto no encontrado.</div>;
  }

  const handleAgregarAlCarrito = () => {
    agregarAlCarrito({ ...producto, talle: talleSeleccionado, cantidad });
  };

  return (
    <div className="container mx-auto p-4 bg-white rounded-lg shadow-lg mt-10">
      <div className="flex flex-col md:flex-row">
        <img 
          src={producto.imagen} 
          alt={producto.nombre} 
          className="w-full md:w-1/2 h-64 object-cover mb-4 md:mb-0 rounded"
        />
        <div className="md:ml-4 flex flex-col justify-center">
          <h1 className="text-3xl font-bold mb-2">{producto.nombre}</h1>
          <p className="text-lg font-semibold mb-4">${producto.precio}</p>
          <div className="mb-4">
            <label htmlFor="talle" className="block text-gray-700 font-semibold mb-2">Seleccionar Talle:</label>
            <select 
              id="talle" 
              value={talleSeleccionado} 
              onChange={(e) => setTalleSeleccionado(e.target.value)}
              className="border border-gray-300 rounded px-2 py-1"
            >
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="cantidad" className="block text-gray-700 font-semibold mb-2">Cantidad:</label>
            <input 
              type="number" 
              id="cantidad" 
              value={cantidad} 
              onChange={(e) => setCantidad(parseInt(e.target.value))}
              min="1"
              className="border border-gray-300 rounded px-2 py-1 w-20"
            />
          </div>
          <button 
            onClick={handleAgregarAlCarrito} 
            className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition duration-300"
          >
            Agregar al Carrito
          </button>
        </div>
      </div>
    </div>
  );
}
