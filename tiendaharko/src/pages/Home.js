import React from 'react';
import ProductCard from '../components/ProductCard';

const productosDestacados = [
  { id: 1, nombre: 'Camiseta Hombre', categoria: 'Hombre', talle: 'M', precio: 20, imagen: '/images/camiseta-hombre.jpg' },
  { id: 2, nombre: 'Vestido Mujer', categoria: 'Mujer', talle: 'M', precio: 45, imagen: '/images/vestido-mujer.jpg' },
  { id: 3, nombre: 'Blusa Mujer', categoria: 'Mujer', talle: 'S', precio: 30, imagen: '/images/blusa-mujer.jpg' },
  { id: 4, nombre: 'Buzo Hombre', categoria: 'Hombre', talle: 'M', precio: 50, imagen: '/images/buzo-hombre.jpg' },
  { id: 5, nombre: 'Camiseta Estampada Hombre', categoria: 'Hombre', talle: 'S', precio: 25, imagen: '/images/camiseta-estampada-hombre.jpg' },
  { id: 6, nombre: 'T-Shirt Mujer', categoria: 'Mujer', talle: 'L', precio: 28, imagen: '/images/tshirt-mujer.jpg' },
];

export default function Home({ agregarAlCarrito }) {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="container mx-auto p-8">
        <h2 className="text-3xl font-bold mb-4 text-center">Productos Destacados</h2>
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
  );
}
