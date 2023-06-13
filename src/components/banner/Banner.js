import React from "react";
import { Link } from "react-router-dom";
import hero from "../assets/images/hero.png";
import "./Banner.css";

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const Banner = () => {
  const currentDate = new Date();
  const currentMonth = capitalizeFirstLetter(currentDate.toLocaleString("default", { month: "long" }));

  return (
    <div className="banner-container" style={{ backgroundImage: `url(${hero})` }}>
      <div className="banner-text" style={{ textAlign: "left" }}>
        <h1>{currentMonth} Promociones</h1>
        <p>Productos destacados</p>
        <Link to="/consoles">
        <button>Ver Consolas</button>
        </Link>
      </div>
    </div>
  );
};

export default Banner;
