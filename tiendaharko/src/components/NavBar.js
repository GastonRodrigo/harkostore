import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav className="bg-white bg-opacity-50 backdrop-blur-lg text-black p-4 shadow-lg fixed w-full z-10">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img src="/images/serbia-logo.png" alt="Logo Serbia Store" className="h-10 w-10 mr-2" />
          <span className="text-2xl font-extrabold hover:text-red-600 transition duration-300">SERBIA Store</span>
        </Link>
        <div className="space-x-4">
          <Link to="/productos/remeras/hombre" className="hover:text-red-600 transition duration-300">Remeras Hombre</Link>
          <Link to="/productos/remeras/mujer" className="hover:text-red-600 transition duration-300">Remeras Mujer</Link>
          <Link to="/productos/buzos/hombre" className="hover:text-red-600 transition duration-300">Buzos Hombre</Link>
          <Link to="/productos/buzos/mujer" className="hover:text-red-600 transition duration-300">Buzos Mujer</Link>
          <Link to="/carrito" className="hover:text-red-600 transition duration-300">Carrito</Link>
        </div>
      </div>
    </nav>
  );
}
