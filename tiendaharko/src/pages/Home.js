import React from 'react';
import ProductCard from '../components/ProductCard';

const productosDestacados = [
  { id: 1, nombre: 'Camiseta Hombre', categoria: 'Hombre', talle: 'M', precio: 20, imagen: '/images/camiseta-hombre.jpg' },
  { id: 3, nombre: 'Chinatown', categoria: 'over', subcategoria: 'hombre', talles: ['M'], precio: 45, imagen: '/images/chineover.bmp' },
  { id: 4, nombre: 'Mistral Over Blue', categoria: 'over', subcategoria: 'hombre', talles: ['S'], precio: 30, imagen: '/images/overmistral.bmp' },
  { id: 4, nombre: 'Buzo Hombre', categoria: 'Hombre', talle: 'M', precio: 50, imagen: '/images/buzo-hombre.jpg' },
  { id: 5, nombre: 'Camiseta Estampada Hombre', categoria: 'Hombre', talle: 'S', precio: 25, imagen: '/images/camiseta-estampada-hombre.jpg' },
  { id: 6, nombre: 'T-Shirt Mujer', categoria: 'Mujer', talle: 'L', precio: 28, imagen: '/images/tshirt-mujer.jpg' },
];

export default function Home({ agregarAlCarrito }) {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-red-100 via-blue-100 to-white">
      {/* Banner */}
      <div className="relative h-64 bg-gray-800 text-white flex items-center justify-center">
        <img 
          src="/images/banner.png" 
          alt="Banner" 
          className="absolute inset-0 object-cover w-full h-full opacity-50" 
        />
        <div className="absolute  items-center justify-center text-center text-blur z-0 p-4">
          <h1 className="text-4xl font-bold mb-2">Bienvenidos a Nuestra Tienda</h1>
          <p className="text-xl">Explora nuestros productos destacados</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-grow p-8">
        <h2 className="text-3xl font-bold mb-4 text-center"> </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
