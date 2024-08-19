import React, { useState } from 'react';

export default function AdminDashboard() {
  const [nombre, setNombre] = useState('');
  const [categoria, setCategoria] = useState('');
  const [subcategoria, setSubcategoria] = useState('');
  const [precio, setPrecio] = useState('');
  const [imagenes, setImagenes] = useState([]);
  const [productos, setProductos] = useState([]); // Estado para la lista de productos

  const categoriasDisponibles = [
    { categoria: 'Remeras', subcategorias: ['Hombre', 'Mujer'] },
    { categoria: 'Buzos', subcategorias: ['Hombre', 'Mujer'] },
  ];

  const handleAgregarProducto = () => {
    const nuevoProducto = {
      id: Date.now(),
      nombre,
      categoria,
      subcategoria,
      precio: parseFloat(precio),
      imagenes,
    };

    // Agregar el nuevo producto a la lista existente de productos
    setProductos([...productos, nuevoProducto]);

    // Limpiar los campos de entrada después de agregar el producto
    setNombre('');
    setCategoria('');
    setSubcategoria('');
    setPrecio('');
    setImagenes([]);
  };

  const handleImagenesChange = (e) => {
    const files = Array.from(e.target.files);
    const fileURLs = files.map(file => URL.createObjectURL(file));
    setImagenes(fileURLs);
  };

  const validarContraseña = () => {
    const contraseña = prompt('Ingrese la contraseña para acceder:');
    if (contraseña !== 'Kalash47') {
      alert('Contraseña incorrecta');
      window.location.href = '/';
    }
  };

  useState(() => {
    validarContraseña();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      <div className="mb-4">
        <label className="block">Nombre:</label>
        <input 
          type="text" 
          value={nombre} 
          onChange={(e) => setNombre(e.target.value)} 
          className="border p-2 w-full"
        />
      </div>
      <div className="mb-4">
        <label className="block">Categoría:</label>
        <select 
          value={categoria} 
          onChange={(e) => setCategoria(e.target.value)} 
          className="border p-2 w-full"
        >
          <option value="">Seleccionar categoría</option>
          {categoriasDisponibles.map((cat) => (
            <option key={cat.categoria} value={cat.categoria}>
              {cat.categoria}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <label className="block">Subcategoría:</label>
        <select 
          value={subcategoria} 
          onChange={(e) => setSubcategoria(e.target.value)} 
          className="border p-2 w-full"
          disabled={!categoria}
        >
          <option value="">Seleccionar subcategoría</option>
          {categoria && categoriasDisponibles
            .find((cat) => cat.categoria === categoria)
            .subcategorias.map((sub) => (
              <option key={sub} value={sub}>
                {sub}
              </option>
            ))}
        </select>
      </div>
      <div className="mb-4">
        <label className="block">Precio:</label>
        <input 
          type="number" 
          value={precio} 
          onChange={(e) => setPrecio(e.target.value)} 
          className="border p-2 w-full"
        />
      </div>
      <div className="mb-4">
        <label className="block">Imágenes:</label>
        <input 
          type="file" 
          multiple 
          onChange={handleImagenesChange} 
          className="border p-2 w-full"
        />
      </div>
      <button 
        onClick={handleAgregarProducto} 
        className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition duration-300"
      >
        Agregar Producto
      </button>

      {/* Mostrar la lista de productos agregados */}
      <div className="mt-6">
        <h2 className="text-xl font-bold mb-4">Productos Agregados</h2>
        <ul>
          {productos.map((producto) => (
            <li key={producto.id} className="border p-2 mb-2">
              <h3 className="font-bold">{producto.nombre}</h3>
              <p>Categoría: {producto.categoria}</p>
              <p>Subcategoría: {producto.subcategoria}</p>
              <p>Precio: ${producto.precio}</p>
              <div className="flex space-x-2">
                {producto.imagenes.map((imagen, index) => (
                  <img key={index} src={imagen} alt={producto.nombre} className="w-16 h-16 object-cover" />
                ))}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
