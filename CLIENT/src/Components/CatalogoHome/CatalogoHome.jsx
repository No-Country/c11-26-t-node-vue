import "../../App.less";
import "./CatalogoHome.css";
import { NavLink, Routes, Route } from "react-router-dom";
import ItemListConteiner from "../ItemListConteiner/ItemListConteiner";
import ItemDetailConteiner from "../ItemDetailConteiner/ItemDetailConteines";
import Artistas from "../Artistas/Artistas";



const CatalogoHome = () => {
  return (
    <>
      <section className="catalogo">
        <>
    
          <img
            className="trayectoriaDeOnda"
            src={"../assets/imgtrayectoriadeformadeonda.svg"}
            alt="Trayectoria de Onda"
          />
          <h2 className="h2Catalogo">catálogo</h2>
        </>
        <div className="estilosContenedor">
          <div className="estilosMusica">
            <NavLink to="/album/*" className="linkEstilos">
              <h4 className="estiloH4">
                <span className="estiloB">
                  {" "}
                  <img
                    className="gif"
                    src={"../assets/auricular.gif"}
                    alt="Auricular"
                  />{" "}
                </span>
                DANCE
              </h4>
            </NavLink>
          </div>
          <div className="gif">
            <NavLink to="/album" className="linkEstilos">
              <h4 className="estiloH4">
                <span className="estiloB">
                  {" "}
                  <img
                    className="gif"
                    src={"../assets/discos-compactos.gif"}
                    alt="Disco"
                  />{" "}
                </span>
                JAZZ
              </h4>
            </NavLink>
          </div>
          <div className="estilosMusica">
            <NavLink to="/album" className="linkEstilos">
              <h4 className="estiloH4">
                <span className="estiloB">
                  {" "}
                  <img
                    className="gif"
                    src={"../assets/discos.gif"}
                    alt="Disco"
                  />{" "}
                </span>
                POP
              </h4>
            </NavLink>
          </div>
          <div className="estilosMusica">
            <NavLink to="/album" className="linkEstilos">
              <h4 className="estiloH4">
                <span className="estiloB">
                  {" "}
                  <img
                    className="gif"
                    src={"../assets/placa-giratoria.gif"}
                    alt="R&B"
                  />{" "}
                </span>
                R&B
              </h4>
            </NavLink>
          </div>
          <div className="estilosMusica">
            <NavLink to="/album" className="linkEstilos">
              <h4 className="estiloH4">
                <span className="estiloB">
                  {" "}
                  <img
                    className="gif"
                    src={"../assets/guitarra-electrica.gif"}
                    alt="Rock"
                  />{" "}
                </span>
                ROCK
              </h4>
            </NavLink>
          </div>
          <Routes>
            <Route path="/" element={<ItemListConteiner />} />
            <Route path="/:idCategoria" element={<ItemListConteiner />} />
            <Route path="/item/:idItem" element={<ItemDetailConteiner />} />
            <Route path="/home/*" element={<h2>Sitio en Construcción</h2>} />
          </Routes>
          <NavLink to="/album" className="btnVerMasCata">Ver más</NavLink>
        </div>
        <Artistas />
      </section>
    </>
  );
};

export default CatalogoHome;
