import logo from "../../../assets/logo.svg";
import kid_music from "../../../assets/home-icons/kid-listens-music.svg";
import { RxMagnifyingGlass } from "react-icons/rx";
import { RxAvatar } from "react-icons/rx";
import "./Home.less";
import CatalogoHome from "../CatalogoHome/CatalogoHome";
import React, { useState } from 'react';
import { Link } from "react-router-dom";


function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const handleSearch = () => {
    
    console.log('Realizando búsqueda con el término:', searchTerm);
    setSearchTerm('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <>
      <div className="home">
        <section className="navbar">
          <div className="left-navbar">
            <img src={logo} alt="" />
            <ul>
              <li>Inicio</li>
              <li>Catalogo</li>
              <li>Artistas</li>
            </ul>
          </div>
          <div className="right-navbar">
            <div className="searchbar">
              <input 
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={handleKeyDown} 
              placeholder="Buscar..."/>
              <button className="btnLupa" onClick={handleSearch} >
                 <RxMagnifyingGlass />
              </button>
            </div>
            <Link to='/cart'>
              <img src={"../../../assets/home-icons/shopping-cart.svg"} alt="Cart" />
            </Link>
            <div className="avatarHome">
              <RxAvatar />
            </div>
          </div>
        </section>
        <section className="welcome">
          <div className="welcome-text">
            <h3>
              Te damos la bienvenida, <span>Nombre.</span>
            </h3>
            <h1>
              ¡vamos a disfrutar <br /> de la{" "}
              <span className="yellow">música</span> a lo grande!
            </h1>
          </div>
          <img src={kid_music} alt="Chico escuchando musica" />
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
