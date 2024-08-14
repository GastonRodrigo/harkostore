import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import { productos } from '../data/productos'; // Asegúrate de importar tus datos de productos

export default function ProductsPage() {
  const [filtro, setFiltro] = useState({ genero: '', talle: '' });

  const handleGeneroChange = (e) => {
    setFiltro({ ...filtro, genero: e.target.value });
  };

  const handleTalleChange = (e) => {
    setFiltro({ ...filtro, talle: e.target.value });
  };

  const filteredProducts = productos.filter(producto => {
    const generoMatch = filtro.genero ? producto.genero === filtro.genero : true;
    const talleMatch = filtro.talle ? producto.talle === filtro.talle : true;
    return generoMatch && talleMatch;
  });

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Productos</h1>
      
      <div className="mb-4">
        <label className="mr-2">Género:</label>
        <select onChange={handleGeneroChange} value={filtro.genero}>
          <option value="">Todos</option>
          <option value="hombre">Hombre</option>
          <option value="mujer">Mujer</option>
        </select>

        <label className="ml-4 mr-2">Talle:</label>
        <select onChange={handleTalleChange} value={filtro.talle}>
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
            agregarAlCarrito={() => console.log(`Agregar ${producto.nombre} al carrito`)} // Implementa la función agregar al carrito
          />
        ))}
      </div>
    </div>
  );
}
