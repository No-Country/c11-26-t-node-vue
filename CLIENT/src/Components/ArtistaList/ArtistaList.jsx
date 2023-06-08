import Artists from "../Artists/Artists";
import { RxMagnifyingGlass } from "react-icons/rx";
import React, { useState } from 'react';
import "../ItemList/ItemList.css";
import "../CatalogoCompleto/CatalogoCompleto.css";
import { Link } from "react-router-dom";

const ArtistaList = ({ productos }) => {
  const [searchTerm, setSearchTerm] = useState("");
  // Mezclar el arreglo de productos de forma aleatoria
  const productosAleatorio = productos.sort(() => Math.random() - 0.5);
  // Obtener solo los primeros 12 productos aleatorios
  const productosLimitado = productosAleatorio.slice(0, 12);

  const handleSearch = () => {
    if (!Array.isArray(productos)) {
      return;
    }

    const filtered = productos.filter((producto) =>
      producto.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="contArt">
      <div className="conte">
        <div className="navDetail3">
          <ul className="ulDetail">
            <Link to="/home" className="liDetail3">
              INICIO/
            </Link>
          </ul>
        </div>

        <img
          className="artistasImgHome"
          src={"../../assets/microfono.svg"}
          alt="Logo microfono"
        />
        <h2 className="h2Catalogo1">ARTISTAS</h2>

        <div className="searchbar">
          <input
            className="inputSerch"
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
      </div>
      {productosLimitado.map((prod) => (
        <Artists key={prod._id} {...prod} />
      ))}
    </div>
  );
};

export default ArtistaList;

