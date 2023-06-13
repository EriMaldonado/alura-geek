import React from "react";
import { useParams } from "react-router-dom";
import { figures } from "../../pages/dataProducts";
import ProductCard from "./ProductCard";
const ProductDetails = () => {
  const { id } = useParams();
  const productId = parseInt(id);
  const product = figures.find((product) => product.id === productId);

  if (!product) {
    return <div>Producto no encontrado</div>;
  }

  return (
    <div className="product-details">
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} />
      <p>Precio: ${product.price}</p>
      <p>{product.description}</p>
    </div>
  );
};

export default ProductDetails;
