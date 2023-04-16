import React from "react";
import hero from "../assets/images/hero.png"
import './Banner.css'
const Banner = () => {
  return (
    <div className="banner-container" style={{ backgroundImage: `url(${hero})` }}>
      <div className="banner-text" style={{ textAlign: "left" }}>
        <h1>Marzo Promociones</h1>
        <p>Productos destacados</p>
        <button>Ver Consolas</button>
      </div>
    </div>
  );
};

export default Banner;



