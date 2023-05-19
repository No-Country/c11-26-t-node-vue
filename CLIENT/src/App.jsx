import "./App.less";
import Footer from "./Components/Footer/Footer";
import { BrowserRouter, Route, Routes, NavLink } from "react-router-dom";
import ItemListConteiner from "./Components/ItemListConteiner/ItemListConteiner";
import ItemDetailConteiner from "./Components/ItemDetailConteiner/ItemDetailConteines";

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
      <br />
      <section className="catalogo">
        
        <>
          <h1 className="h1Catalogo">
            {" "}
            <img
              className="trayectoriaDeOnda"
              src={"../../assets/imgtrayectoriadeformadeonda.svg"}
              alt="Trayectoria de Onda"
            />{" "}
            catálogo
          </h1>
        </>
        <div className="estilosContenedor">
          <div className="estilosMusica">
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
          </div>
          <div className="gif">
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
          </div>
          <div className="estilosMusica">
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
          </div>
          <div className="estilosMusica">
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
          </div>
          <div className="estilosMusica">
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
          </div>
        </div>
        <div className="contenedorCard">
          
            
              
          <Routes>
          <Route path="/" element={<ItemListConteiner />} />
          <Route path="/:idCategoria" element={<ItemListConteiner />} />
          <Route path="/item/:idItem" element={<ItemDetailConteiner />} />
          </Routes>
              
            
          
        </div>
      </section>
      <br />

      <Footer />
    </BrowserRouter>
  );
}

export default App;
