import "./Pagar.css";
import Star1 from "../../../assets/Formassimples/Star1.svg";
import Rectangulo from "../../../assets/Formassimples/Rectangle40.png";
import { Link } from "react-router-dom";
import React from "react";

const Pagar = () => {
  return (
    <section className="contePagar">
      
      <div className="conteDescarga">
        <img className="star" src={Star1} alt={Star1} />
        <h2 className="h2Gracias">¡Gracias por tu compra!</h2>
        <p className="felicidades">
          Felicitaciones por adquirir un album digital.
        </p>
        <p className="archivos">
          Los archivos de música digital estan listos para ser
        </p>
        <p className="descargar">descargados.</p>
        <p className="disfrutar">
          ¡Disfruta de tu música! EL equipo de <span className="rosa">MUSIC ESTUDIO</span>
        </p>
        <div className="conteBtn">
        <Link to='/home' className="btnDescargar">Descargar</Link>
        <Link to='/home' className="masTarde">Más tarde</Link>
        </div>
      </div>
      <div className="conteRectangle">
        <img className="rectangle" src={Rectangulo} alt={Rectangulo} />
      </div>
    </section>
  );
};

export default Pagar;
