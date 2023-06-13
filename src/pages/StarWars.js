import React from "react";
import { Link } from "react-router-dom";
import "./products.css"; // Importa el archivo CSS
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import {figures} from "../pages/dataProducts";


const StarWars = () => {
  return (
    <>
      <Header />
      <div className="main-container-products">
        <div className="title-container-products">
          <h2>Star Wars Products</h2>
          <div className="title-container-products">
            <h2 className="title-products">Star Wars</h2>
          </div>
          <div className="image-container">
            {figures.map((product) => (
              <div key={product.id} className="product">
                <img src={product.image} alt={product.name} onClick={product} />
                <p>{product.name}</p>
                <p>Precio: ${product.price}</p>
                <Link to={`${product.id}`}> 
                <button className="custom-button">{product.button}</button>
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

export default StarWars;
