import kid_music from "../../../assets/home-icons/kid-listens-music.svg";
import { RxMagnifyingGlass } from "react-icons/rx";
import { RxAvatar } from "react-icons/rx";
import "./Home.less";
import CatalogoHome from "../CatalogoHome/CatalogoHome";
import React, { useState, useEffect } from "react";
import CartWidget from "../CartWidget/CartWidget";
import { BsMusicNoteList } from "react-icons/bs";
import { Link } from "react-router-dom";



function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [alias, setAlias] = useState("");
  const [openHome, setOpenHome] = useState(false);

  //const lastUserAlias = localStorage.getItem("lastUserAlias");

  
    const storedAlias = localStorage.getItem("alias");
 

  const handleSearch = () => {
    console.log("Realizando búsqueda con el término:", searchTerm);
    setSearchTerm("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };
  
  return (
    <>
      <div className="home">
        <section className="navbar">
          <div className="left-navbar">
            <Link to="/">
              <img className="logoHome" src="/logo.png" alt="Logo" />
            </Link>
            <button className="open" onClick={() => setOpenHome(!openHome)}>
              <BsMusicNoteList />
            </button>
            <ul className="ulHome" id={openHome ? "hidden2" : ""}>
              <Link className="linkHome" to="/">
                {" "}
                <span className="inicio">Inicio</span>
              </Link>
              <Link className="linkHome" to='/album'>
                <span className="inicio">Catálogo</span>
              </Link>
              <Link to='/artists' className="linkHome">
                <span className="inicio" to='/artists' >Artistas</span>
              </Link>
              <img className="chicoMusic1" src={kid_music} alt="Chico escuchando musica" />
            </ul>
          </div>
          <div className="right-navbar">
            <div className="searchbar">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Buscar..."
              />
              <button className="btnLupa" onClick={handleSearch}>
                <RxMagnifyingGlass />
              </button>
            </div>
            <CartWidget />
            <div className="avatarHome">
              <RxAvatar />
            </div>
          </div>
        </section>
        <section className="welcome">
          <div className="welcome-text">
            <h3>
              Te damos la bienvenida, <span>{storedAlias}.</span>
            </h3>
            <h1>
              ¡vamos a disfrutar <br /> de la{" "}
              <span className="yellow">música</span> a lo grande!
            </h1>
          </div>
          <img className="chicoMusic" src={kid_music} alt="Chico escuchando musica" />
        </section>
        <section className="iconic">
          <img
            className="imgStar"
            src={"../../../assets/home-icons/circular-star.svg"}
            alt="Estrella"
          />
          <h2 className="albunesIconicos">álbunes icónicos</h2>
        </section>

        <section className="iconic-albums">
          <div className="contenedorAlbumIconico">
            <img
              className="imgAlbumIco"
              src={"../../../assets/albunesIconicos/joshua.jpg"}
              alt="U2"
            />
            <h4 className="h4Iconico">U2</h4>
            <p className="parrafoIconico">The Joshua Tree | 1987</p>
          </div>
          <div className="contenedorAlbumIconico">
            <img
              className="imgAlbumIco"
              src={"../../../assets/albunesIconicos/fleetwoo.jpg"}
              alt="The Joshua Tree | 1987"
            />
            <h4 className="h4Iconico">Fleetwood Mac</h4>
            <p className="parrafoIconico">Rumours | 1977</p>
          </div>
          <div className="contenedorAlbumIconico">
            <img
              className="imgAlbumIco"
              src={"../../../assets/albunesIconicos/Pink.png"}
              alt="Pink Floyd"
            />
            <h4 className="h4Iconico">Pink Floyd</h4>
            <p className="parrafoIconico">The Dark Side of the Moon | 1973</p>
          </div>
          <div className="contenedorAlbumIconico">
            <img
              className="imgAlbumIco"
              src={"../../../assets/albunesIconicos/nevermind.jpg"}
              alt="Nirvana"
            />
            <h4 className="h4Iconico">Nirvana</h4>
            <p className="parrafoIconico">Nevermind | 1991</p>
          </div>
          <div className="contenedorAlbumIconico">
            <img
              className="imgAlbumIco"
              src={"../../../assets/albunesIconicos/Prince.jpg"}
              alt="Prince"
            />
            <h4 className="h4Iconico">Prince</h4>
            <p className="parrafoIconico">Purple Rain | 1984</p>
          </div>
          <div className="contenedorAlbumIconico">
            <img
              className="imgAlbumIco"
              src={"../../../assets/albunesIconicos/Radiohead.jpg"}
              alt="Radiohead"
            />
            <h4 className="h4Iconico">Radiohead</h4>
            <p className="parrafoIconico">OK Computer | 1997</p>
          </div>
        </section>
        
        <CatalogoHome />
      </div>
    </>
  );
}

export default Home;
