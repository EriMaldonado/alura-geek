import React from 'react';
import lupa from "../assets/images/lupa.png"
import './Header.css';
const Search=() => {
  return (
    <div className="search-container">
      <input type="text" placeholder="¿Qué deseas buscar?" />
      <button>
        <img src={lupa} alt="Buscar" />
      </button>
    </div>
  );
}

export default Search;
