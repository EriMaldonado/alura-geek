import React from "react";
import { Link } from "react-router-dom";

import "../main/Main.css"
const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <Link to={`/alura-geek/${product.id}`}>Ver detalles</Link>

    </div>
  );
};

export default ProductCard;

