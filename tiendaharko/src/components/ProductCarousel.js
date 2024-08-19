// import React from 'react';
// import Slider from 'react-slick';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const productos = [
//   {
//     id: 1,
//     nombre: 'Camiseta Hombre',
//     imagen: '/images/camiseta-hombre.jpg',
//   },
//   {
//     id: 2,
//     nombre: 'Vestido Mujer',
//     imagen: '/images/vestido-mujer.jpg',
//   },
//   // Agrega más productos aquí...
// ];

// export default function ProductCarousel() {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//   };

//   return (
//     <Slider {...settings}>
//       {productos.map(producto => (
//         <div key={producto.id} className="text-center">
//           <img src={producto.imagen} alt={producto.nombre} className="mx-auto h-64 object-cover" />
//           <h3 className="text-2xl mt-4 font-bold">{producto.nombre}</h3>
//         </div>
//       ))}
//     </Slider>
//   );
// }
