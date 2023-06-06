import { Link } from "react-router-dom";
import "./ModalRegistro.css";
import Chicosonriendo from "../../../assets/Formassimples/Chicosonriendo.png";
import Vector from "../../../assets/Formassimples/Vector2.svg";

const ModalRegistro = () => {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="mobalText">
          <div className="mensaje">
            <h2 className="h2Modal">Registro de usuario exitoso</h2>
          </div>
          <div>
            <img className="" src={Vector} alt="Vector de ondas" />
          </div>
          <div className="cuerpo">
            <h4 className="h4Modal">
              ¡Todo listo! Comienza a explorar en Music Estudio y descubre tu
              ritmo
            </h4>
          </div>
          <div className="pie">
            <Link className="btnI" to="/iniciarsesion">
              {" "}
              <button className="btnI">Inicar sesión</button>{" "}
            </Link>
          </div>
        </div>
        <img className="chicoSonr" src={Chicosonriendo} alt="Chico sonriendo" />
      </div>
    </div>
  );
};

export default ModalRegistro;
