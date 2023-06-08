import ItemListConteiner from "../../components/ItemListConteiner/ItemListConteiner";
import ItemDetailConteiner from "../../components/ItemDetailConteiner/ItemDetailConteines";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { RxMagnifyingGlass } from "react-icons/rx";
import { getProductos } from "../../asyncmock";
import "../../Components/CatalogoCompleto/CatalogoCompleto.css";
import "../../App.less";
import "./Catalogo5.css";

const Catalogo5 = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [productos, setProductos] = useState([]);
  const [filteredProductos, setFilteredProductos] = useState([]);

  useEffect(() => {
    getProductos()
      .then((data) => {
        setProductos(data);
        setFilteredProductos(data);
      })
      .catch((error) => console.error(error));
  }, []);

  const navigate = useNavigate();

  const handleSearch = () => {
    if (!Array.isArray(productos)) {
      return;
    }

    const filtered = productos.filter((producto) =>
      producto.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProductos(filtered);
    setProductos(filtered); // Actualiza también el estado de `productos`
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const handleItemClick = (itemId) => {
    navigate(`/item/${itemId}`);
  };

  return (
    <section className="cata5">
      
      <Routes>
        <Route path="/" element={<ItemListConteiner />} />
        <Route path="/:idCategoria" element={<ItemListConteiner />} />
        <Route path="/item/:idItem" element={<ItemDetailConteiner />} />
        <Route path="*" element={<h2>Sitio en Construcción</h2>} />
      </Routes>

      <div className="conteBntAl">
        <Link to="/album">
          <button className="btnAl"></button>
        </Link>
        <Link to="/catalogo2">
          <button className="btnAl"></button>
        </Link>
        <Link to="/catalogo3">
          <button className="btnAl"></button>
        </Link>
        <Link to="/catalogo4">
          <button className="btnAl"></button>
        </Link>
        <Link to="/catalogo5">
          <button className="btnAl5"></button>
        </Link>
      </div>
    </section>
  );
};

export default Catalogo5;
