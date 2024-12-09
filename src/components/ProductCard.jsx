// src/components/ProductCard.jsx
import React from 'react';
import '../styles/ProductCard.css'; // Estilos específicos para las tarjetas de productos

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <button>Ver Producto</button>
    </div>
  );
};

export default ProductCard;
