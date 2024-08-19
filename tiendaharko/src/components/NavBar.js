import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  // Cerrar el menú al hacer clic fuera de él
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (isOpen && !event.target.closest('nav')) {
        setIsOpen(false);
      }
    };
    document.addEventListener('click', handleOutsideClick);
    return () => document.removeEventListener('click', handleOutsideClick);
  }, [isOpen]);

  return (
    <nav className="bg-white bg-opacity-50 backdrop-blur-lg text-black p-4 shadow-lg fixed w-full z-10 rounded-b-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Imagen del logo */}
        <Link to="/" className="flex items-center">
          <img src="/images/serbia-logo.png" alt="Logo Serbia Store" className="h-10 w-10 mr-2" />
        </Link>

        {/* Texto del logo */}
        <Link to="/" className={`transition-all duration-300 ${isOpen ? 'opacity-0 invisible' : 'opacity-100 visible'} ml-2`}>
          <span className="text-2xl font-extrabold hover:text-blue-600 transition duration-300">BELGRADE Store</span>
        </Link>

        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="text-3xl focus:outline-none ml-auto md:hidden"
        >
          ☰
        </button>
        <div className={`flex-col md:flex-row md:space-x-4 flex items-center w-full md:w-auto transition-all duration-300 ease-in-out ${isOpen ? 'flex' : 'hidden'} md:flex`}>
          <Link to="/productos/remeras/hombre" className="relative group block md:inline-block">
            Remeras Hombre
            <span className="block h-0.5 bg-black group-hover:w-full transition-all duration-300 ease-in-out w-0"></span>
          </Link>
          <Link to="/productos/buzos/hombre" className="relative group block md:inline-block">
            Buzos Hombre
            <span className="block h-0.5 bg-black group-hover:w-full transition-all duration-300 ease-in-out w-0"></span>
          </Link>
          <Link to="/productos/remeras/mujer" className="relative group block md:inline-block">
            Remeras Mujer
            <span className="block h-0.5 bg-black group-hover:w-full transition-all duration-300 ease-in-out w-0"></span>
          </Link>
          <Link to="/productos/buzos/mujer" className="relative group block md:inline-block">
            Buzos Mujer
            <span className="block h-0.5 bg-black group-hover:w-full transition-all duration-300 ease-in-out w-0"></span>
          </Link>
          <Link to="/carrito" className="hover:text-red-600 transition duration-300 flex items-center block md:inline-block">
            <FaShoppingCart className="text-2xl" />
          </Link>
        </div>
      </div>
    </nav>
  );
}
