import React, { useState } from 'react';

export default function Carrito({ carrito, actualizarCantidadProducto, eliminarProducto }) {
  const [expandedImage, setExpandedImage] = useState(null);

  const total = carrito.reduce((total, item) => total + item.precio * item.cantidad, 0);

  const crearMensajeWhatsApp = () => {
    const productos = carrito.map(item => `${item.nombre} - Talle: ${item.talle} - Cantidad: ${item.cantidad}`).join('%0A');
    return `Hola, me gustaría realizar el siguiente pedido:%0A${productos}%0ATotal: $${total}`;
  };

  const agruparProductos = (productos) => {
    return productos.reduce((acumulador, producto) => {
      const clave = `${producto.id}-${producto.talle}`;
      if (!acumulador[clave]) {
        acumulador[clave] = { ...producto, cantidad: 0 };
      }
      acumulador[clave].cantidad += producto.cantidad;
      return acumulador;
    }, {});
  };

  const productosAgrupados = Object.values(agruparProductos(carrito));

  const handleImageClick = (imageSrc) => {
    setExpandedImage(expandedImage === imageSrc ? null : imageSrc);
  };

  const handleOutsideClick = (event) => {
    if (expandedImage && !event.target.closest('.expanded')) {
      setExpandedImage(null);
    }
  };

  return (
    <div className="container mx-auto p-4 bg-white rounded-lg shadow-lg mt-10" onClick={handleOutsideClick}>
      <h1 className="text-2xl font-bold mb-4 text-black">Carrito de Compras</h1>
      {productosAgrupados.length === 0 ? (
        <div className="flex justify-center items-center h-64">
          <p className="text-black">No hay productos en el carrito.</p>
          <a 
            href="/"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300 ml-4"
          >
            ¡Exploremos algo!
          </a>
        </div>
      ) : (
        <div>
          <div className="grid grid-cols-1 gap-4">
            {productosAgrupados.map(item => (
              <div 
                key={`${item.id}-${item.talle}`} 
                className="flex flex-col sm:flex-row rounded-lg shadow-md p-2 transition-transform transform hover:scale-105"
              >
                <div className="sm:w-1/3 flex justify-center sm:justify-start">
                  <img
                    src={item.imagen}
                    alt={item.nombre}
                    className={`w-full h-32 object-cover mb-2 sm:mb-0 rounded cursor-pointer ${expandedImage === item.imagen ? 'expanded' : ''}`}
                    onClick={() => handleImageClick(item.imagen)}
                  />
                </div>
                <div className="sm:w-2/3 sm:ml-4 flex flex-col justify-center">
                  <h2 className="font-semibold text-sm text-black">{item.nombre}</h2>
                  
                  {/* Talle visualizado como cuadrado */}
                  <div className="flex items-center my-2">
                    <p className="text-sm text-black mr-2">Talle:</p>
                    <div className="border border-black rounded py-1 px-2 text-center bg-white text-black">
                      {item.talle}
                    </div>
                  </div>

                  <p className="font-bold text-sm text-black">${item.precio}</p>
                  <p className="text-sm text-black">Cantidad: {item.cantidad}</p>
                  <div className="flex space-x-2 mt-2">
                    <button 
                      onClick={() => actualizarCantidadProducto(item.id, item.talle, item.cantidad - 1)} 
                      className="bg-white text-black border border-black py-1 px-2 rounded hover:bg-black hover:text-white transition duration-300 text-sm"
                    >
                      Eliminar 1 Unidad
                    </button>
                    <button 
                      onClick={() => eliminarProducto(item.id, item.talle)} 
                      className="bg-red-600 text-white py-1 px-2 rounded hover:bg-red-700 transition duration-300 text-sm"
                    >
                      Eliminar Producto
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4">
            <h2 className="text-lg font-bold text-black">Total: ${total}</h2>
            <div className="mt-4 flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-2">
              <a 
                href={`https://wa.me/549XXXXXXX?text=${crearMensajeWhatsApp()}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition duration-300"
              >
                Enviar Pedido por WhatsApp
              </a>
              <a 
                href="https://www.mercadopago.com.ar/"
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
              >
                Pagar con Mercado Pago
              </a>
            </div>
          </div>
        </div>
      )}
      {expandedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50" onClick={() => setExpandedImage(null)}>
          <img src={expandedImage} alt="Imagen ampliada" className="max-w-full max-h-full" />
        </div>
      )}
    </div>
  );
}