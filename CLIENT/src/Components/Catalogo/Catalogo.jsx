import './Catalogo.less';
import "../../App.less";
import { Link, Routes, Route } from "react-router-dom";
import ItemListConteiner from "../ItemListConteiner/ItemListConteiner";
import ItemDetailConteiner from "../ItemDetailConteiner/ItemDetailConteines";
import Carrusel from '../Carrusel/Carrusel';


const Catalogo = () => {
  return (
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
            <Link to={"/dance"} className="linkEstilos">
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
            </Link>
          </div>
          <div className="gif">
            <Link to={"jazz"} className="linkEstilos">
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
            </Link>
          </div>
          <div className="estilosMusica">
            <Link to={"pop"} className="linkEstilos">
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
            </Link>
          </div>
          <div className="estilosMusica">
            <Link to={"r&b"} className="linkEstilos">
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
            </Link>
          </div>
          <div className="estilosMusica">
            <Link to={"rock"} className="linkEstilos">
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
            </Link>
          </div>
          <Routes>
          <Route path="/" element={<ItemListConteiner />} />
          <Route path="/:idCategoria" element={<ItemListConteiner />} />
          <Route path="/item/:idItem" element={<ItemDetailConteiner />} />
          </Routes>
        </div>
        <Carrusel />
      </section>
  )
}

export default Catalogo
