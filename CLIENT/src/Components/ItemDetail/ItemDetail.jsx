import Contador from "../Contador/Contador";
import "./ItemDetail.css";
import "../../App.less";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";




const ItemDetail = ({ id, titulo, precio, imagen, stock }) => {
  const colores = ["#FFD829", "#FE6927", "#FF80D9", "#4EAFFE", "#FE6927"];
  const [backgroundColor, setBackgroundColor] = useState("");
  const [agregarCantidad, setAgregarCantidad] = useState(0);

  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);
    console.log("Productos agregados " + cantidad);
  };

  useEffect(() => {
    const indiceAleatorio = Math.floor(Math.random() * colores.length);
    const colorAleatorio = colores[indiceAleatorio];
    setBackgroundColor(colorAleatorio);
  }, []);

  const [imageSrc, setImageSrc] = useState();

  const corazon1 = (
    <img
      src={"../../../assets/Iconos-Artistas-Home/corazon-vacio.svg"}
      alt="Corazón vacio"
      className="corazonVacio"
    />
  );
  const corazon2 = (
    <img
      src={"../../../assets/Iconos-Artistas-Home/corazon-lleno.svg"}
      alt="Corazón lleno"
      className="corazonVacio"
    />
  );
  

  const handleClick = () => {
    // Cambiar la imagen al presionar sobre ella
    if (imageSrc === corazon1) {
      setImageSrc(corazon2);
    } else {
      setImageSrc(corazon1);
    }
  };





  return (
    <div className="contenedorItem">
      <img src={imagen} alt={titulo} className="imgItemDetail" />
      <div className="contenedorDetail">
        <div className="navDetail">
          <ul className="ulDetail">
            <li className="liDetail">INICIO/</li>
            <li className="liDetail">CATALOGO/</li>
          </ul>
          <img src={imageSrc} alt="Imagen" onClick={handleClick} className="corazonVacio"/>
        </div>
        <h2 className="artistaDetail"> {id} </h2>
        <div className="contenedorPrecioDetail">
          <h3 className="tituloDetail"> {titulo} </h3>
          <h4 className="precioDetail"> US $ {precio} </h4>
        </div>
        {agregarCantidad > 0 ? (
          <Link to="/card">Terminar la compra</Link>
        ) : (
          <Contador
            inicial={1}
            stock={stock}
            funcionAgregar={manejadorCantidad}
          />
        )}
        <p className="parrafoItem">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam quia
          eligendi enim quam sint. Suscipit ipsa laboriosam iusto doloribus
          recusandae.
        </p>
      </div>
    </div>
  );
};

export default ItemDetail;
