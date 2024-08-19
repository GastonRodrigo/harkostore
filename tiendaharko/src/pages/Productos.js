import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';

export default function Productos({ productos, agregarAlCarrito }) {
  const [filtroTalle] = useState('');




  // Filtramos los productos por género y talle
  const filteredProducts = productos.filter(producto => {

    const talleMatch = filtroTalle ? producto.talle === filtroTalle : true;
    return talleMatch;
  });

  return (
    <div className="container mx-auto p-4">

      

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
