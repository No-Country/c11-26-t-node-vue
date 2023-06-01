import "./Footer.less";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <Link to={"/"}>
        <img className="logoFooter" src={"/logo.png"} alt="Logo" />
      </Link>
      <div className="contenedor">
        <div className="contenedorfoot">
          <h3 className="titleFooter">Musica</h3>
          <Link className="linkFooter" to={"/home"}>
            <p className="p">Inicio</p>
          </Link>
          <Link className="linkFooter" to={"/"}>
            <p className="p">Catalogó</p>
          </Link>
          <Link className="linkFooter" to={"/"}>
            <p className="p">Artistas</p>
          </Link>
        </div>
        <div className="contenedorfoot">
          <h3 className="titleFooter">Enlaces útiles</h3>
          <Link className="linkFooter" to={"/"}>
            <p className="p">Ayuda</p>
          </Link>
          <Link className="linkFooter" to={"/"}>
            <p className="p">Preguntas frecuentes</p>
          </Link>
          <Link className="linkFooter" to={"https://chrome.google.com/webstore/category/extensions?hl=es"} target="_blank">
            <p className="p">App móvil gratis</p>
          </Link>
        </div>
        <div className="contenedorfoot">
          <h3 className="titleFooter">Equipo</h3>
          <Link className="linkFooter" to={"/"}>
            <p className="p">Acerca de</p>
          </Link>
        </div>
        <div className="contenedorfoot">
          <h3 className="titleFooter">Contacto</h3>
          <Link to={'https://www.instagram.com/'} target="_blank">
          <AiOutlineInstagram className="redes" />
          </Link>
          <Link to={'https://twitter.com/'} target="_blank">
          <AiOutlineTwitter className="redes" />
          </Link>
          <Link to={'https://www.facebook.com/'} target="_blank">
          <img className="redes" src={"../../assets/facebook.svg"} alt="" />
          </Link>
        </div>
      </div>
      <hr />
      <p className="copy">
        {" "}
        Copyrigth <AiOutlineCopyrightCircle />
        <span className="parrafoMagenta">c11-26-t-node-vue</span>
      </p>
    </footer>
  );
};

export default Footer;