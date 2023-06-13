import React from "react";
import { Link } from "react-router-dom";
import vector from "../assets/images/vector.png";
import './Footer.css'
const Footer = () => {
  return (
    <footer>
      <div className="footer-section">
      <Link to="/alura-geek" className="no-underline">
          <div className="logo-container center">
            <img src={vector} />
              <span className="alura">Alura</span>
              <span className="geek">Geek</span>
          </div>  
        </Link>
      </div>
      <div class="container__nav">
        <nav id="nav">
          <ul>
            <li>
              <a href="/alura-geek" class="select">
                Quienes Somos
              </a>
            </li>
            <li>
              <a href="/alura-geek">Politica de privaciad</a>
            </li>
            <li>
              <a href="/alura-geek">Programa de fidelidad</a>
            </li>
            <li>
              <a href="/alura-geek">Nuestras Tiendas</a>
            </li>
            <li>
              <a href="/alura-geek">Quiero ser franquiciado</a>
            </li>
            <li>
              <a href="/alura-geek">Anuncie aqui</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="footer-section">
        <form className="form-footer center">
          <h3>Hable con nosotros</h3>
          <input type="text" placeholder="Nombre"></input>
          <br />
          <input type="text" placeholder="Escribe tu mensaje"></input>
          <div className="button-container">
            <button>Enviar mensaje</button>
          </div>
        </form>
      </div>
      <div className="footer-section">
        <form className="form-footer center">{/*...*/}</form>
      </div>
    </footer>
  );
};

export default Footer;
