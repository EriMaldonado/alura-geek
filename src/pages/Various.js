import React from "react";
import { Link } from "react-router-dom";
import "./products.css"; // Importa el archivo CSS
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import {products} from "../pages/dataProducts";

const Various = () => {
  return (
    <>
      <Header />
      <div className="main-container-products">
        <div className="title-container-products">
          <h2>Varios </h2>
          <div className="image-container">
            {products.map((product) => (
              <div key={product.id} className="product">
                <img src={product.image} alt={product.name} onClick={product} />
                <p>{product.name}</p>
                <p>Precio: ${product.price}</p>
                <Link to={`${product.id}`}> 
                <button>{product.button}</button>
                </Link>
              </div>
            ))}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Various;
