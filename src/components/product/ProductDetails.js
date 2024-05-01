import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { figures } from "../../pages/dataProducts";

import "../main/Main.css";

const ProductDetails = () => {
  const { id } = useParams();
  const productId = parseInt(id);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = () => {
      const foundProduct = figures.find((product) => product.id === productId);
      if (foundProduct) {
        setProduct(foundProduct);
      }
    };

    fetchProduct();
  }, [productId]);

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
