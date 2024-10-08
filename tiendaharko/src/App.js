import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Productos from './pages/Productos';
import Carrito from './pages/Carrito';
import Footer from './components/Footer';
import AdminDashboard from './pages/AdminDashboard';
import ProductDetail from './pages/ProductDetail';

const productos = [
  { id: 1, nombre: 'Camiseta Hombre', categoria: 'remeras', subcategoria: 'hombre', descripcion: 'agregar descripcion breve', talles: ['S', 'M', 'L'], precio: 12500, imagen: '/images/camiseta-hombre.jpg' },
  { id: 2, nombre: 'Camisa Hombre', categoria: 'remeras', subcategoria: 'hombre', descripcion: 'agregar descripcion breve', talles: ['S', 'M', 'L'], precio: 12500, imagen: '/images/camisa-hombre.jpg' },
  { id: 3, nombre: 'Chinatown', categoria: 'over', subcategoria: 'hombre', descripcion: 'agregar descripcion breve', talles: ['S', 'M', 'L'], precio: 17500, imagen: '/images/chineover.bmp' },
  { id: 4, nombre: 'Mistral Over Blue', categoria: 'over', subcategoria: 'hombre', descripcion: 'agregar descripcion breve', talles: ['S', 'M', 'L', 'XL', 'XXL'], precio: 17500, imagen: '/images/overmistral.bmp' },
  { id: 5, nombre: 'Buzo Hombre', categoria: 'buzos', subcategoria: 'hombre', descripcion: 'agregar descripcion breve', talles: ['S', 'M', 'L'], precio: 35000, imagen: '/images/worse.jpg' },
  { id: 6, nombre: 'Pantalon fachero facherito', categoria: 'pantalones', subcategoria: 'hombre', descripcion: 'agregar descripcion breve', talles: ['S', 'M', 'L'], precio: 35500, imagen: '/images/buzo-mujer.jpg' },
  { id: 7, nombre: 'Sudadera Hombre', categoria: 'buzos', subcategoria: 'hombre', descripcion: 'agregar descripcion breve',  talles: ['S', 'M', 'L'], precio: 35000, imagen: '/images/worse.jpg' },
  { id: 8, nombre: 'Pantalon para pies', categoria: 'pantalones', subcategoria: 'hombre', descripcion: 'agregar descripcion breve', talles: ['S', 'M', 'L'], precio: 42000, imagen: '/images/sudadera-mujer.jpg' },
  { id: 9, nombre: 'Camiseta Estampada Hombre', categoria: 'remeras', subcategoria: 'hombre', descripcion: 'agregar descripcion breve', talles: ['S', 'M', 'L'], precio: 12500, imagen: '/images/camiseta-estampada-hombre.jpg' },
  { id: 10, nombre: 'Serbia Strong', categoria: 'over', subcategoria: 'hombre', descripcion: 'agregar descripcion breve', talles: ['S', 'M', 'L'], precio: 13500, imagen: '/images/serbia-over.jpg' },
  { id: 11, nombre: 'Canguro Hombre', categoria: 'buzos', subcategoria: 'hombre', descripcion: 'agregar descripcion breve', talles: ['S', 'M', 'L'], precio: 33000, imagen: '/images/canguro-hombre.jpg' },
  { id: 12, nombre: 'Canguro Mujer', categoria: 'pantalones', subcategoria: 'hombre', descripcion: 'agregar descripcion breve', talles: ['S', 'M', 'L'], precio: 42500, imagen: '/images/canguro-mujer.jpg' },
];

function App() {
  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (producto, talle) => {
    setCarrito(prevCarrito => {
      const productoExistente = prevCarrito.find(item => item.id === producto.id && item.talle === talle);
      if (productoExistente) {
        return prevCarrito.map(item =>
          item.id === producto.id && item.talle === talle
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        );
      } else {
        return [...prevCarrito, { ...producto, talle, cantidad: 1 }];
      }
    });
    toast.success(`${producto.nombre} agregado al carrito`);
  };

  const actualizarCantidadProducto = (productoId, talle, nuevaCantidad) => {
    setCarrito(prevCarrito => {
      if (nuevaCantidad <= 0) {
        return prevCarrito.filter(item => item.id !== productoId || item.talle !== talle);
      } else {
        return prevCarrito.map(item =>
          item.id === productoId && item.talle === talle
            ? { ...item, cantidad: nuevaCantidad }
            : item
        );
      }
    });
  };

  const eliminarProducto = (productoId, talle) => {
    setCarrito(prevCarrito => prevCarrito.filter(item => item.id !== productoId || item.talle !== talle));
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <NavBar />
        <ToastContainer />
        <div className="flex-grow pt-16">
          <Routes>
            <Route path="/" element={<Home agregarAlCarrito={agregarAlCarrito} />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route 
              path="/productos"
              element={<Productos productos={productos} agregarAlCarrito={agregarAlCarrito} />}
            />
            <Route
              path="/productos/remeras/hombre"
              element={<Productos productos={productos.filter(p => p.categoria === 'remeras' && p.subcategoria === 'hombre')} agregarAlCarrito={agregarAlCarrito} />}
            />
            <Route
              path="/productos/over/hombre"
              element={<Productos productos={productos.filter(p => p.categoria === 'over' && p.subcategoria === 'hombre')} agregarAlCarrito={agregarAlCarrito} />}
            />
            <Route
              path="/productos/buzos/hombre"
              element={<Productos productos={productos.filter(p => p.categoria === 'buzos' && p.subcategoria === 'hombre')} agregarAlCarrito={agregarAlCarrito} />}
            />
            <Route
              path="/productos/pantalones/hombre"
              element={<Productos productos={productos.filter(p => p.categoria === 'pantalones' && p.subcategoria === 'hombre')} agregarAlCarrito={agregarAlCarrito} />}
            />
            <Route
              path="/carrito"
              element={<Carrito carrito={carrito} actualizarCantidadProducto={actualizarCantidadProducto} eliminarProducto={eliminarProducto} />}
            />
            <Route
              path="/productos/:id"
              element={<ProductDetail productos={productos} agregarAlCarrito={agregarAlCarrito} />}
            />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;