import React from 'react';

export default function Carrito({ carrito, actualizarCantidadProducto, eliminarProducto }) {
  const total = carrito.reduce((total, item) => total + item.precio * item.cantidad, 0);

  const crearMensajeWhatsApp = () => {
    const productos = carrito.map(item => `${item.nombre} - Talle: ${item.talle} - Cantidad: ${item.cantidad}`).join('%0A');
    return `Hola, me gustaría realizar el siguiente pedido:%0A${productos}%0ATotal: $${total}`;
  };

  return (
    <div className="container mx-auto p-4 bg-white">
      <h1 className="text-2xl font-bold mb-4 text-black">Carrito de Compras</h1>
      {carrito.length === 0 ? (
        <p className="text-black">No hay productos en el carrito.</p>
      ) : (
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {carrito.map(item => (
              <div key={item.id} className="rounded-lg shadow-md p-2 transition-transform transform hover:scale-105">
                <img src={item.imagen} alt={item.nombre} className="w-full h-32 object-cover mb-2 rounded" />
                <h2 className="font-semibold text-sm text-black">{item.nombre}</h2>
                <p className="text-sm text-black">Talle: {item.talle}</p>
                <p className="font-bold text-sm text-black">${item.precio}</p>
                <p className="text-sm text-black">Cantidad: {item.cantidad}</p>
                <div className="flex space-x-2 mt-2">
                  <button 
                    onClick={() => actualizarCantidadProducto(item.id, item.cantidad - 1)} 
                    className="bg-blue-600 text-white py-1 px-2 rounded hover:bg-blue-700 transition duration-300 text-sm"
                  >
                    Eliminar 1 Unidad
                  </button>
                  <button 
                    onClick={() => eliminarProducto(item.id)} 
                    className="bg-red-600 text-white py-1 px-2 rounded hover:bg-red-700 transition duration-300 text-sm"
                  >
                    Eliminar Producto
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4">
            <h2 className="text-lg font-bold text-black">Total: ${total}</h2>
            <div className="mt-4">
              <a 
                href={`https://wa.me/549XXXXXXX?text=${crearMensajeWhatsApp()}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition duration-300 mr-2"
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
    </div>
  );
}
