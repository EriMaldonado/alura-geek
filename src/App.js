// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import Home from "./components/Home";
import StarWars from "./pages/StarWars";
import Console from "./pages/Console";
import Various from "./pages/Various";
import ProductDetails from "./components/product/ProductDetails";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/alura-geek" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/starwars" element={<StarWars />} />
          <Route path="/consoles" element={<Console />} />
          <Route path="/various" element={<Various />} />
          <Route path="/alura-geek/:id" element={<ProductDetails />} />

        </Routes>
      </Router>
    </>
  );
};

export default App;

