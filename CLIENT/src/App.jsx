import "./App.less";
import Footer from "./Components/Footer/Footer";
import { BrowserRouter, Route, Routes, NavLink, Link } from "react-router-dom";
import ItemListConteiner from "./Components/ItemListConteiner/ItemListConteiner";
import ItemDetailConteiner from "./Components/ItemDetailConteiner/ItemDetailConteines";
import Carrusel from "./Components/Carrusel/Carrusel";

function App() {
  return (
    <BrowserRouter>
      <section className="header">
        <div className="navbar">
          <img src="/logo.png" alt="Logo" />
          <ul>
            <li>
              <NavLink to={"/"}>Inicio</NavLink>
            </li>
            <li>
              <a href="">Nosotros</a>
            </li>
            <li>
              <a href="">Registrarse</a>
            </li>
            <li>
              <button>Iniciar de sesión</button>
            </li>
          </ul>
        </div>
        <div className="frontpage">
          <div className="text">
            <h1>
              <span className="pink">Descubre </span>
              <span className="yellow">el ritmo </span>
              <span className="l-blue">que mueve </span>
              <span className="white">tu alma</span>
            </h1>
            <p>
              Encuentra tus artistas favoritos, géneros apasionantes y álbumes
              icónicos. ¡Empieza a disfrutar de la música que amas hoy mismo!
            </p>
            <button>Explorar ahora</button>
          </div>
          <div className="logo">
            <img src="/logo.png" alt="" />
          </div>
        </div>
      </section>
      <section className="catalogo">
        <>
          <img
            className="trayectoriaDeOnda"
            src={"../../assets/imgtrayectoriadeformadeonda.svg"}
            alt="Trayectoria de Onda"
          />
          <h1 className="h1Catalogo">catálogo</h1>
        </>
        <div className="estilosContenedor">
          <div className="estilosMusica">
            <Link to={"/dance"}>
              <h4 className="estiloH4">
                <span className="estiloB">
                  {" "}
                  <img
                    className="gif"
                    src={"../../assets/auricular.gif"}
                    alt="Auricular"
                  />{" "}
                </span>
                DANCE
              </h4>
            </Link>
          </div>
          <div className="gif">
            <Link to={"jazz"}>
            <h4 className="estiloH4">
              <span className="estiloB">
                {" "}
                <img
                  className="gif"
                  src={"../../assets/discos-compactos.gif"}
                  alt="Disco"
                />{" "}
              </span>
              JAZZ
            </h4>
            </Link>
          </div>
          <div className="estilosMusica">
            <Link to={"pop"}>
            <h4 className="estiloH4">
              <span className="estiloB">
                {" "}
                <img
                  className="gif"
                  src={"../../assets/discos.gif"}
                  alt="Disco"
                />{" "}
              </span>
              POP
            </h4>
            </Link>
          </div>
          <div className="estilosMusica">
            <Link to={"r&b"}>
            <h4 className="estiloH4">
              <span className="estiloB">
                {" "}
                <img
                  className="gif"
                  src={"../../assets/placa-giratoria.gif"}
                  alt="R&B"
                />{" "}
              </span>
              R&B
            </h4>
            </Link>
          </div>
          <div className="estilosMusica">
            <Link to={"rock"}>
            <h4 className="estiloH4">
              <span className="estiloB">
                {" "}
                <img
                  className="gif"
                  src={"../../assets/guitarra-electrica.gif"}
                  alt="Rock"
                />{" "}
              </span>
              ROCK
            </h4>
            </Link>
          </div>
        </div>
        <div className="contenedorCard">
          <Routes>
            <Route path="/" element={<ItemListConteiner />} />
            <Route path="/:idCategoria" element={<ItemListConteiner />} />
            <Route path="/item/:idItem" element={<ItemDetailConteiner />} />
          </Routes>
        </div>
        <div className="artistasContainer">
          <img
            className="artistasImg"
            src={"../assets/microfono.svg"}
            alt="Logo microfono"
          />
          <h2 className="artistash2">artistas</h2>
        </div>
        <Carrusel />
      </section>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
