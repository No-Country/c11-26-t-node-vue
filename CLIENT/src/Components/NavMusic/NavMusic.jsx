import "./NavMusic.css";
import { Link, NavLink } from "react-router-dom";
import { BsMusicNoteList } from "react-icons/bs";
import { useState } from "react";

const NavMusic = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="navbar">
      <Link to={"/"}>
        <img src="/logo.png" alt="Logo" />
      </Link>
      <button className="open" onClick={() => setOpen(!open)}>
        <BsMusicNoteList />
      </button>
      <ul>
        <div className="ul" id={open ? "hidden" : ""}>
          <li>
            <NavLink to={"/registro"}>
              <button className="btnRegisto">Registro</button>
            </NavLink>
          </li>
          <li>
            <NavLink to={"/iniciarsesion"}>
              <button className="btnInicio">Inicio de sesión</button>
            </NavLink>
          </li>
        </div>
      </ul>
    </div>
  );
};

export default NavMusic;
