import { Link } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import "./Login.css";

const Login = () => {
  
  return (
    
    
    <main>
      <Header/>
    <section class="login">
      <div class="login_title">Iniciar Sesión</div>
      <form action="#" class="form-cadastro" data-form>
        <input
          class="login_input__url"
          type="text"
          placeholder="Escriba su correo electrónico"
          required
          data-email
        />
        <input
          class="login_input__name"
          type="password"
          placeholder="Escriba su contraseña"
          required
          data-password
        />
        <div className="login_register">
          ¿No tienes una cuenta? <br/>
          <Link to="/register">Registrarse</Link>
        </div>
        <button type="submit" class="login_btn">Entrar</button>
        
      </form>
      
    </section>
    <Footer/>
  </main> 
  );
};

export default Login;
