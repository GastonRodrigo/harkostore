import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Productos from './pages/Productos';
import Carrito from './pages/Carrito';
import Footer from './components/Footer';

const productos = [
  { id: 1, nombre: 'Camiseta Hombre', categoria: 'remeras', subcategoria: 'hombre', talle: 'M', precio: 20, imagen: '/images/camiseta-hombre.jpg' },
  { id: 2, nombre: 'Camisa Hombre', categoria: 'remeras', subcategoria: 'hombre', talle: 'L', precio: 35, imagen: '/images/camisa-hombre.jpg' },
  { id: 3, nombre: 'Vestido Mujer', categoria: 'remeras', subcategoria: 'mujer', talle: 'M', precio: 45, imagen: '/images/vestido-mujer.jpg' },
  { id: 4, nombre: 'Blusa Mujer', categoria: 'remeras', subcategoria: 'mujer', talle: 'S', precio: 30, imagen: '/images/blusa-mujer.jpg' },
  { id: 5, nombre: 'Buzo Hombre', categoria: 'buzos', subcategoria: 'hombre', talle: 'M', precio: 50, imagen: '/images/buzo-hombre.jpg' },
  { id: 6, nombre: 'Buzo Mujer', categoria: 'buzos', subcategoria: 'mujer', talle: 'S', precio: 55, imagen: '/images/buzo-mujer.jpg' },
  // Nuevos productos
  { id: 7, nombre: 'Sudadera Hombre', categoria: 'buzos', subcategoria: 'hombre', talle: 'L', precio: 60, imagen: '/images/sudadera-hombre.jpg' },
  { id: 8, nombre: 'Sudadera Mujer', categoria: 'buzos', subcategoria: 'mujer', talle: 'M', precio: 65, imagen: '/images/sudadera-mujer.jpg' },
  { id: 9, nombre: 'Camiseta Estampada Hombre', categoria: 'remeras', subcategoria: 'hombre', talle: 'S', precio: 25, imagen: '/images/camiseta-estampada-hombre.jpg' },
  { id: 10, nombre: 'T-Shirt Mujer', categoria: 'remeras', subcategoria: 'mujer', talle: 'L', precio: 28, imagen: '/images/tshirt-mujer.jpg' },
  { id: 11, nombre: 'Canguro Hombre', categoria: 'buzos', subcategoria: 'hombre', talle: 'XL', precio: 70, imagen: '/images/canguro-hombre.jpg' },
  { id: 12, nombre: 'Canguro Mujer', categoria: 'buzos', subcategoria: 'mujer', talle: 'M', precio: 75, imagen: '/images/canguro-mujer.jpg' },
];

function App() {
  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (producto) => {
    setCarrito(prevCarrito => {
      const productoExistente = prevCarrito.find(item => item.id === producto.id);
      if (productoExistente) {
        return prevCarrito.map(item => 
          item.id === producto.id 
            ? { ...item, cantidad: item.cantidad + 1 } 
            : item
        );
      } else {
        return [...prevCarrito, { ...producto, cantidad: 1 }];
      }
    });
    toast.success(`${producto.nombre} agregado al carrito`);
  };

  const actualizarCantidadProducto = (productoId, nuevaCantidad) => {
    setCarrito(prevCarrito => {
      if (nuevaCantidad <= 0) {
        return prevCarrito.filter(item => item.id !== productoId);
      } else {
        return prevCarrito.map(item => 
          item.id === productoId 
            ? { ...item, cantidad: nuevaCantidad } 
            : item
        );
      }
    });
  };

  const eliminarProducto = (productoId) => {
    setCarrito(prevCarrito => prevCarrito.filter(item => item.id !== productoId));
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <NavBar />
        <ToastContainer />
        <div className="flex-grow pt-16">
        <Routes>
          <Route path="/" element={<Home agregarAlCarrito={agregarAlCarrito}/>} />
          <Route 
            path="/productos" 
            element={<Productos productos={productos} agregarAlCarrito={agregarAlCarrito} />} 
          />
          <Route 
            path="/productos/remeras/hombre" 
            element={<Productos productos={productos.filter(p => p.categoria === 'remeras' && p.subcategoria === 'hombre')} agregarAlCarrito={agregarAlCarrito} />} 
          />
          <Route 
            path="/productos/remeras/mujer" 
            element={<Productos productos={productos.filter(p => p.categoria === 'remeras' && p.subcategoria === 'mujer')} agregarAlCarrito={agregarAlCarrito} />} 
          />
          <Route 
            path="/productos/buzos/hombre" 
            element={<Productos productos={productos.filter(p => p.categoria === 'buzos' && p.subcategoria === 'hombre')} agregarAlCarrito={agregarAlCarrito} />} 
          />
          <Route 
            path="/productos/buzos/mujer" 
            element={<Productos productos={productos.filter(p => p.categoria === 'buzos' && p.subcategoria === 'mujer')} agregarAlCarrito={agregarAlCarrito} />} 
          />
          <Route 
            path="/carrito" 
            element={<Carrito 
              carrito={carrito} 
              actualizarCantidadProducto={actualizarCantidadProducto} 
              eliminarProducto={eliminarProducto} 
            />} 
          />
        </Routes>
      </div>
      <Footer />
      </div>
    </Router>
  );
}

export default App;
