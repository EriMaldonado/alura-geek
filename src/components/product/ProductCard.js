import React from "react";

const ProductCard = ({ products }) => {
  return (
    <div className="product-card">
      <img src={products.image} alt={products.name} />
      <h3>{products.name}</h3>
      <p>{products.price}</p>
      <button>Ver producto</button>
    </div>
  );
};
export default ProductCard;
