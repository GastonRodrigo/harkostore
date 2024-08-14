import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';

export default function Productos({ productos, agregarAlCarrito }) {
  const [filtroTalle, setFiltroTalle] = useState('');


  const handleTalleChange = (e) => {
    setFiltroTalle(e.target.value);
  };

  // Filtramos los productos por género y talle
  const filteredProducts = productos.filter(producto => {

    const talleMatch = filtroTalle ? producto.talle === filtroTalle : true;
    return talleMatch;
  });

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Productos</h1>

      <div className="mb-4">
        

        <label className="ml-4 mr-2">Talle:</label>
        <select onChange={handleTalleChange} value={filtroTalle}>
          <option value="">Todos</option>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
          <option value="XL">XL</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {filteredProducts.map(producto => (
          <ProductCard 
            key={producto.id} 
            producto={producto} 
            agregarAlCarrito={agregarAlCarrito} 
          />
        ))}
      </div>
    </div>
  );
}
