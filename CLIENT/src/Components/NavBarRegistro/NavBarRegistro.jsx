import "../../App.less";
import { Link, NavLink } from "react-router-dom";
import FrontPage from "../FrontPage/FrontPage";
import Catalogo from "../Catalogo/Catalogo";

const NavBarRegistro = () => {
  return (
    <>
      <section className="header">
        <div className="navbar">
          <Link to={"/"}>
            <img src="/logo.png" alt="Logo" />
          </Link>

          <ul>
            <li>
              <NavLink to={"/registro"}>
                <button className="btnRegisto">Registro</button>
              </NavLink>
            </li>
            <li>
              <NavLink to={"*"}>
                <button className="btnInicio">Inicio de sesión</button>
              </NavLink>
            </li>
          </ul>
        </div>
        <FrontPage />
      </section>
      <Catalogo />
    </>
  );
};

export default NavBarRegistro;
