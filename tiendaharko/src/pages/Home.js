import React from 'react';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';

const productosDestacados = [
  { id: 1, nombre: 'Camiseta Hombre', categoria: 'Hombre', talle: 'M', precio: 20, imagen: '/images/camiseta-hombre.jpg' },
  { id: 2, nombre: 'Vestido Mujer', categoria: 'Mujer', talle: 'M', precio: 45, imagen: '/images/vestido-mujer.jpg' },
  // Agrega más productos destacados si lo deseas
];

export default function Home({ agregarAlCarrito }) {
  return (
    <div>
      <div className="mt-16">
        <div className="container mx-auto p-8">
          <h2 className="text-3xl font-bold mb-4">Productos Destacados</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {productosDestacados.map(producto => (
              <ProductCard 
                key={producto.id} 
                producto={producto} 
                agregarAlCarrito={agregarAlCarrito} 
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
