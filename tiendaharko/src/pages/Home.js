import React from 'react';
import ProductCard from '../components/ProductCard';
import { motion } from 'framer-motion';

const productosDestacados = [
  { id: 1, nombre: 'Camiseta Hombre', categoria: 'Hombre', precio: 12500, imagen: '/images/camiseta-hombre.jpg' },
  { id: 3, nombre: 'Chinatown', categoria: 'over', subcategoria: 'hombre', precio: 12500, imagen: '/images/chineover.bmp' },
  { id: 4, nombre: 'Mistral Over Blue', categoria: 'over', subcategoria: 'hombre', precio: 13500, imagen: '/images/overmistral.bmp' },
  { id: 5, nombre: 'Buzo Hombre', categoria: 'Hombre', precio: 35000, imagen: '/images/worse.jpg' },
  { id: 9, nombre: 'Camiseta Estampada Hombre', categoria: 'Hombre', precio: 25000, imagen: '/images/camiseta-estampada-hombre.jpg' },
  { id: 10, nombre: 'Serbia Strong', categoria: 'Hombre', precio: 13500, imagen: '/images/serbia-over.jpg' },
];

export default function Home({ agregarAlCarrito }) {
  return (
    <div className="flex flex-col min-h-screen">
    <motion.div 
      className="relative h-64 bg-gray-800 text-white flex items-center justify-center overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.img 
        src="/images/banner.png" 
        alt="Banner" 
        className="absolute inset-0 object-cover w-full h-full"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
      />
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      <motion.div 
        className="relative z-10 text-center"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <h1 className="text-4xl font-bold mb-2">Bienvenidos a Nuestra Tienda</h1>
        <p className="text-xl">Explora nuestros productos destacados</p>
      </motion.div>
    </motion.div>

    <div className="flex-grow p-8">
      <h2 className="text-3xl font-bold mb-8 text-center">Productos Destacados</h2>
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {productosDestacados.map((producto, index) => (
          <motion.div
            key={producto.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <ProductCard 
              producto={producto} 
              agregarAlCarrito={agregarAlCarrito} 
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  </div>
);
}