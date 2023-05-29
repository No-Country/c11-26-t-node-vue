import Footer from "../Footer/Footer";
import logo from "../../../assets/logo.svg"
import kid_music from "../../../assets/home-icons/kid-listens-music.svg"
import "./Home.less";

function Home() {
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
              <input placeholder="Buscar" type="text" />
              <button><i></i></button>
            </div>
            <a href=""></a>
            <a href=""></a>
          </div>
        </section>
        <section className="welcome">
          <div className="welcome-text">
            <h3>Te damos la bienvenida, <span>Nombre.</span></h3>
            <h1>¡vamos a disfrutar <br/> de la <span className="yellow">música</span> a lo grande!</h1>
          </div>
          <img src={kid_music} alt="Chico escuchando musica" />
        </section>
        <section className="iconic">
          <img src="" alt="" />
          <h2>álbumes icónicos</h2>
          <section className="iconic-albums">
            {/* Aca van los álbumes iconicos! */}
          </section>
        </section>
        <section className="catalog">
          <img src="../../../../assets/imgtrayectoriadeformadeonda.svg" alt="Trayectoria de Onda" />
          <h2>catálogo</h2>
          {/* Nose si hacer un nuevo estilo para el catalogo en tema de css, despues veo, pero esto ya lo hizo diego! */}
        </section>
        <section className="artists">
          {/* Esto va a ser un embole, el infierno de flexbox, es sufrir esto nomas en tema de diseño, ya vere como le hago! */}
        </section>
      </div>
      <Footer />
    </>
  )
}

export default Home