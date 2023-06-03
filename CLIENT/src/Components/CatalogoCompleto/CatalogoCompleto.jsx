import ItemDetailConteiner from "../ItemDetailConteiner/ItemDetailConteines";
import ItemListConteiner from "../ItemListConteiner/ItemListConteiner";
import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import "./CatalogoCompleto.css";

const CatalogoCompleto = () => {
  return (
    <section className="catalogo">
      <div className="conte">
        <div className="navDetail3">
          <ul className="ulDetail">
            <Link to="/home" className="liDetail3">
              INICIO/
            </Link>
          </ul>
        </div>

        <img
          className="trayectoriaDeOnda1"
          src={"../assets/imgtrayectoriadeformadeonda.svg"}
          alt="Trayectoria de Onda"
        />
        <h2 className="h2Catalogo1">catálogo</h2>
      </div>

      <Routes>
        <Route path="/" element={<ItemListConteiner />} />
        <Route path="/:idCategoria" element={<ItemListConteiner />} />
        <Route path="/item/:idItem" element={<ItemDetailConteiner />} />
        <Route path="*" element={<h2>Sitio en Construcción</h2>} />
      </Routes>
    </section>
  );
};

export default CatalogoCompleto;
