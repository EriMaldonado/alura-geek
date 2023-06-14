import React from "react";
import { Link } from "react-router-dom";

import "../main/Main.css"
const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.price}</p>
      <Link to={`/${product.id}`}>
        <button>Ver producto</button>
      </Link>
    </div>
  );
};

export default ProductCard;

