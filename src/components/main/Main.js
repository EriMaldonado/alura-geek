import img1 from "../assets/images/img1.png";
import img2 from "../assets/images/img2.png";
import img3 from "../assets/images/img3.png";
import img4 from "../assets/images/img4.png";
import img5 from "../assets/images/img5.png";
import img6 from "../assets/images/img6.png";
import img7 from "../assets/images/img7.png";
import img8 from "../assets/images/img8.png";
import img9 from "../assets/images/img9.png";
import img10 from "../assets/images/img10.png";
import img11 from "../assets/images/img11.png";
import img12 from "../assets/images/img12.png";
import img13 from "../assets/images/img13.png";
import img14 from "../assets/images/img14.png";
import img15 from "../assets/images/img15.png";
import img16 from "../assets/images/img16.png";
import img17 from "../assets/images/img17.png";
import img18 from "../assets/images/img18.png";
import { Link } from "react-router-dom";
import './Main.css'
import "@fortawesome/fontawesome-free/css/all.css";

const Main = () => {
  const figures = [
    {
      id: 1,
      name: "Producto XYZ",
      image: img1,
      price: 60,
      button: "Ver producto",
    },
    {
      id: 2,
      name: "Producto XYZ",
      image: img2,
      price: 60,
      button: "Ver producto",
    },
    {
      id: 3,
      name: "Producto XYZ",
      image: img3,
      price: 60,
      button: "Ver producto",
    },
    {
      id: 4,
      name: "Producto XYZ",
      image: img4,
      price: 60,
      button: "Ver producto",
    },
    {
      id: 5,
      name: "Producto XYZ",
      image: img5,
      price: 60,
      button: "Ver producto",
    },

  ];
  const consoles = [
    {
      id: 7,
      name: "Producto XYZ",
      image: img7,
      price: 60,
      button: "Ver producto",
    },
    {
      id: 8,
      name: "Producto XYZ",
      image: img8,
      price: 60,
      button: "Ver producto",
    },
    {
      id: 9,
      name: "Producto XYZ",
      image: img9,
      price: 60,
      button: "Ver producto",
    },
    {
      id: 10,
      name: "Producto XYZ",
      image: img10,
      price: 60,
      button: "Ver producto",
    },
    {
      id: 11,
      name: "Producto XYZ",
      image: img11,
      price: 60,
      button: "Ver producto",
    },
  ];
  const products = [
    {
      id: 13,
      name: "Producto XYZ",
      image: img13,
      price: 60,
      button: "Ver producto",
    },
    {
      id: 14,
      name: "Producto XYZ",
      image: img14,
      price: 60,
      button: "Ver producto",
    },
    {
      id: 15,
      name: "Producto XYZ",
      image: img15,
      price: 60,
      button: "Ver producto",
    },
    {
      id: 16,
      name: "Producto XYZ",
      image: img16,
      price: 60,
      button: "Ver producto",
    },
    {
      id: 17,
      name: "Producto XYZ",
      image: img17,
      price: 60,
      button: "Ver producto",
    },

  ];
  
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
        {figures.map((product) => (
          <div key={product.id} className="product">
            <img src={product.image} alt={product.name} onClick={product} />
            <p>{product.name}</p>
            <p>Precio: ${product.price}</p>
            <Link to={`starwars/${product.id}`}> 
                <button className="custom-button">{product.button}</button>
                </Link>
          </div>
        ))}
      </div>
      <div className="title-container">
        <h2 className="title">Consolas</h2>
        <div className="heading-right">
          <a href="/consoles">Ver todos</a>
          <i className="fa-solid fa-caret-right"></i>
        </div>
      </div>
      <div className="image-container">
        {consoles.map((product) => (
          <div key={product.id} className="product">
            <img src={product.image} alt={product.name} onClick={product} />
            <p>{product.name}</p>
            <p>Precio: ${product.price}</p>
            <Link to={`consoles/${product.id}`}> 
                <button className="custom-button">{product.button}</button>
                </Link>
          </div>
        ))}
      </div>
      <div className="title-container">
        <h2 className="title">Diversos</h2>
        <div className="heading-right">
          <a href="/various">Ver todos</a>
          <i className="fa-solid fa-caret-right"></i>
        </div>
      </div>
      <div className="image-container">
        {products.map((product) => (
          <div key={product.id} className="product">
            <img src={product.image} alt={product.name} onClick={product} />
            <p>{product.name}</p>
            <p>Precio: ${product.price}</p>
            <Link to={`various/${product.id}`}> 
                <button className="custom-button">{product.button}</button>
                </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Main;
