import React, { useState } from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import "../register/Register.css"

const Register = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    const handleSubmit = (event) => {
      event.preventDefault();
      // Aquí puedes realizar la lógica de registro utilizando los datos del formulario
      console.log("Registro exitoso");
    };
  
    return (
      <main>
        <Header />
        <section className="register">
          <div className="register_title">Registrarse</div>
          <form onSubmit={handleSubmit} className="form-cadastro" data-form>
            <input
              className="register_input__name"
              type="text"
              placeholder="Nombre"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
            <input
              className="register_input__name"
              type="text"
              placeholder="Apellido"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
            <input
              className="register_input__name"
              type="text"
              placeholder="Dirección"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
            <input
              className="register_input__name"
              type="text"
              placeholder="Celular"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
            <input
              className="register_input__url"
              type="email"
              placeholder="Correo electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              className="register_input__name"
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit" className="register_btn">
              Registrarse
            </button>
          </form>
        </section>
        <Footer />
      </main>
    );
  };
  
  export default Register;