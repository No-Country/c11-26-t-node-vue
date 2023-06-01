import React, { useState } from "react";
import "./LoginFrom.css";
import { Link } from "react-router-dom";
import { RxEyeNone, RxEyeOpen } from "react-icons/rx";

function LoginForm() {
  const [alias, setAlias] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError(
        <h2 style={{ color: "red", fontFamily: "Roboto" }}>
          Las contraseñas no coinciden
        </h2>
      );
      return;
    }

    try {
      const response = await fetch("https://nocountry.clopezpro.com/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          alias: alias,
          email: email,
          password: password
        })
      });

      if (response.ok) {
        // Registro exitoso
        setAlias("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");

        localStorage.setItem("lastUserAlias", alias);

        setError( <p className="exitoUser">Usuario registrado exitosamente, puede iniciar sesión</p> );
      } else {
        // Manejar errores de la solicitud
        setError( <p className="exitoUser">Error al registrar el usuario</p>);
      }
    } catch (error) {
      // Manejar errores de la solicitud
      setError(<p className="exitoUser">Error al registrar el usuario</p>);
    }
    console.log("Alias:", alias);
    console.log("Email:", email);
    console.log("Password:", password);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div className="conte">
      <img
        className="loginConteiner"
        src={"../../../assets/imgFondoLogin.jpeg"}
        alt="Imagen de fondo con artistas"
      />
      <div className="degradeFondo">
        <div className="mjBienvenida">
          <h2 className="bienvenida">Te damos la bienvenida a</h2>
          <h2 className="bienvenida">MUSIC ESTUDIO</h2>
          <h5 className="explora">
            ¡Explora nuestra colección de discos y sumérgete en el mundo de la
            música!
          </h5>
        </div>
        <form className="formLogin" onSubmit={handleSubmit}>
          <Link to={"/"}>
            <img className="logoLogin" src={"/logo.png"} alt="Logo" />
          </Link>
          <h2 className="creaLogin">Crea una cuenta</h2>
          {error && <p className="errorMessage">{error}</p>}
          <div className="labelLogin">
            <label
              placeholder="Introduce tu nombre o alias"
              className="inputLogin"
            >
              Nombre o alias
            </label>
            <input
              placeholder="Introduce tu nombre o alias"
              type="text"
              id="alias"
              value={alias}
              onChange={(e) => setAlias(e.target.value)}
              required
              className="input"
            />
          </div>
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
          <div className="labelLogin">
            <label className="inputLogin">Repite contraseña</label>
            <input
              placeholder="Repite contraseña"
              type={showConfirmPassword ? "text" : "password"}
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="inputpassword"
            />
            <button
              type="button"
              onClick={toggleConfirmPasswordVisibility}
              className="showPasswordButton"
            >
              {showConfirmPassword ? <RxEyeOpen /> : <RxEyeNone />}
            </button>
          </div>
          <button className="btnRegist" type="submit">
            Registrarse
          </button>
          <div className="conteIniciar">
            <h4 className="loginh4">¿Ya tienes una cuenta?</h4>
            <Link to="/iniciarsesion" className="spanLogin">
              Iniciar sesión
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;