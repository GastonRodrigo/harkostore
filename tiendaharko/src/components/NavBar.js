import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Cerrar el menú al hacer clic fuera de él
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (isMenuOpen && !event.target.closest('.mobile-menu') && !event.target.closest('.menu-toggle')) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('click', handleOutsideClick);
    return () => document.removeEventListener('click', handleOutsideClick);
  }, [isMenuOpen]);

  return (
    <>
      <nav className="bg-white bg-opacity-50 backdrop-blur-lg text-black p-4 shadow-lg fixed w-full z-20 rounded-b-lg">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <img src="/images/serbia-logo.png" alt="Logo Serbia Store" className="h-10 w-10 mr-2" />
          </Link>

          <Link to="/" className="transition-all duration-300 ml-2">
            <span className="text-3xl font-extrabold hover:text-blue-600 transition duration-300">BELGRADE</span>
          </Link>

          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="text-3xl focus:outline-none ml-auto md:hidden menu-toggle"
          >
            ☰
          </button>

          <div className="hidden md:flex md:space-x-4 items-center">
            <NavLinks closeMenu={() => setIsMenuOpen(false)} />
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`fixed inset-y-0 right-0 transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} w-45 bg-white shadow-lg z-30 transition-transform duration-500 ease-in-out mobile-menu`}>
        <div className="flex flex-col items-start p-8 space-y-4">
          <NavLinks closeMenu={() => setIsMenuOpen(false)} />
        </div>
      </div>
    </>
  );
}

function NavLinks({ closeMenu }) {
  return (
    <>
      <NavLink to="/productos/remeras/hombre" closeMenu={closeMenu}>Remeras</NavLink>
      <NavLink to="/productos/over/hombre" closeMenu={closeMenu}>Remeras Oversize</NavLink>
      <NavLink to="/productos/buzos/hombre" closeMenu={closeMenu}>Buzos</NavLink>
      <NavLink to="/productos/pantalones/hombre" closeMenu={closeMenu}>Pantalones</NavLink>
      <NavLink to="/carrito" closeMenu={closeMenu}> <FaShoppingCart className="text-2xl" /></NavLink>
    </>
  );
}

function NavLink({ to, children, closeMenu }) {
  const handleClick = () => {
    closeMenu();
  };

  return (
    <Link to={to} className="relative group block" onClick={handleClick}>
      {children}
      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
    </Link>
  );
}