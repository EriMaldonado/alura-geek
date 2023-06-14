import React from "react";
import { Link } from "react-router-dom";
import { figures, consoles, products } from "../../pages/dataProducts";
import "../main/Main.css";
import "@fortawesome/fontawesome-free/css/all.css";

const Main = () => {

  const firstFiveFigures = figures.slice(0, 5);
  const firstFiveConsoles = consoles.slice(0, 5);
  const firstFiveProducts = products.slice(0, 5);

  return (
    <div className="main-container">
      <div className="title-container">
        <h2 className="title">Star Wars</h2>
        <div className="heading-right">
          <Link to="/starwars">Ver todos</Link>
          <i className="fa-solid fa-caret-right"></i>
        </div>
      </div>
      <div className="image-container">
        {firstFiveFigures.map((product) => (
          <div key={product.id} className="product">
            <img src={product.image} alt={product.name} onClick={product} />
            <p>{product.name}</p>
            <p>Precio: ${product.price}</p>
            <Link to={`starwars/${product.id}`}>
              <button>Ver producto</button>
            </Link>
          </div>
        ))}
      </div>
      <div className="title-container">
        <h2 className="title">Consolas</h2>
        <div className="heading-right">
          <Link to="/consoles">Ver todos</Link>
          <i className="fa-solid fa-caret-right"></i>
        </div>
      </div>
      <div className="image-container">
        {firstFiveConsoles.map((product) => (
          <div key={product.id} className="product">
            <img src={product.image} alt={product.name} onClick={product} />
            <p>{product.name}</p>
            <p>Precio: ${product.price}</p>
            <Link to={`consoles/${product.id}`}>
              <button>{product.button}</button>
            </Link>
          </div>
        ))}
      </div>
      <div className="title-container">
        <h2 className="title">Diversos</h2>
        <div className="heading-right">
          <Link to="/various">Ver todos</Link>
          <i className="fa-solid fa-caret-right"></i>
        </div>
      </div>
      <div className="image-container">
        {firstFiveProducts.map((product) => (
          <div key={product.id} className="product">
            <img src={product.image} alt={product.name} onClick={product} />
            <p>{product.name}</p>
            <p>Precio: ${product.price}</p>
            <Link to={`various/${product.id}`}>
              <button>{product.button}</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Main;
