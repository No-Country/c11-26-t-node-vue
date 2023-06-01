import './InicioSesion.css';
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RxEyeNone, RxEyeOpen } from "react-icons/rx";
import { useNavigate } from 'react-router-dom';

const InicioSesion = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
     fetch(`https://nocountry.clopezpro.com/auth/login?user=${email}&pass=${password}`).then((res) => {
      if (res.status === 200) {
        return res.json();
      } else {
        console.log("Login incorrecto");
      }
    }).then(res=>{
      
      switch(res.result){
        case 1:
          //login is ok
          localStorage.setItem("token", res.token);
          setEmail("");
          setPassword("");
          setError("");
          navigate('/home', { replace: true });
          break;
        default:
          throw res.message;
      }
    }).catch(err=>{
       setError(err);
       alert(err);
    })
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="conte">
      <img
        className="loginConteiner"
        src="../../../assets/imgFondoLogin.jpeg"
        alt="Imagen de fondo con artistas"
      />
      <div className="degradeFondo">
        <div className="mjBienvenida">
          <h2 className="bienvenida">¡Bienvenido de vuelta!</h2>

          <h5 className="explora">
            Estamos encantados de tenerte aquí. Prepárate para descubrir y disfrutar de la mejor música en nuestra plataforma.
          </h5>
        </div>
        <form className="formLogin" onSubmit={handleSubmit}>
          <Link to={"/"}>
            <img className="logoLogin" src="/logo.png" alt="Logo" />
          </Link>
          <h2 className="creaLogin">Inicio de sesión</h2>
          {error && <h2 className="errorMessage">{error}</h2>}

          <div className="labelLogin">
            <label className="inputLogin">
              Dirección de correo electrónico
            </label>
            <input
              placeholder="Introduce tu correo electrónico"
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="input"
            />
          </div>
          <div className="labelLogin">
            <label className="inputLogin">Contraseña</label>
            <input
              placeholder="Introduce una contraseña"
              type={showPassword ? "text" : "password"}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="input"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="showPasswordButton"
            >
              {showPassword ? <RxEyeOpen /> : <RxEyeNone />}
            </button>
          </div>

          <button className="btnRegist" type="submit">
            Iniciar sesión
          </button>
          <div className="conteIniciar">
            <h4 className="loginh4">¿Eres un nuevo usuario?</h4>
            <Link to="/registro" className="spanLogin">
              Crear una cuenta
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default InicioSesion;

