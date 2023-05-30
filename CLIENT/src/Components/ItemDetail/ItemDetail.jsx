import Contador from "../Contador/Contador";
import "./ItemDetail.css";
import "../../App.less";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Corazon from "../Corazon/Corazon";


const ItemDetail = ({ id, titulo, precio, imagen, stock }) => {
  const colores = ["#FFD829", "#FE6927", "#FF80D9", "#4EAFFE", "#FE6927"];
  const [backgroundColor, setBackgroundColor] = useState("");
  const [agregarCantidad, setAgregarCantidad] = useState(0);
  const [isClicked, setIsClicked] = useState(false);


  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);
    console.log("Productos agregados " + cantidad);
  };

  useEffect(() => {
    const indiceAleatorio = Math.floor(Math.random() * colores.length);
    const colorAleatorio = colores[indiceAleatorio];
    setBackgroundColor(colorAleatorio);
  }, []);

  const handleClickCanciones = () => {
    setIsClicked(true);
  };

  const handleClickResumen = () => {
    setIsClicked(false);
  };

  const canciones = ["Canción 1", "Canción 2", "Canción 3", "Canción 4", "Canción 5"];  
  return (
    <div className="contenedorItem">
    <img src={imagen} alt={titulo} className="imgItemDetail" />
    <div className="contenedorDetail">
      <div className="navDetail">
        <ul className="ulDetail">
          <Link to='/home' className="liDetail1">INICIO/</Link>
          <Link to='/catalogo' className="liDetail2">CATALOGO/</Link>
        </ul>
        <Corazon id={id} />
      </div>
      <h2 className="artistaDetail"> {id} </h2>
      <div className="contenedorPrecioDetail">
        <h3 className="tituloDetail"> {titulo} </h3>
        <h4 className="precioDetail"> US $ {precio} </h4>
      </div>
      <div className="btnDetail">
        <button
          className={`btnCanciones ${isClicked ? "clicked" : ""}`}
          onClick={handleClickCanciones}
        >
          Canciones
        </button>
        <button
          className={`btnResumen ${isClicked ? "clicked" : ""}`}
          onClick={handleClickResumen}
        >
          Resumen
        </button>
      </div>
      
      {isClicked ? (
        <ul className="listaCanciones">
        {canciones.map((cancion, index) => (
          <React.Fragment key={index}>
            <li>{ <img
                  className="play"
                  src={"../../../assets/Iconos-Artistas-Home/play.svg"}
                  alt="Play"
                /> }{cancion}</li>
            {index !== canciones.length - 1 && <hr className="lineaSeparacion" />}
          </React.Fragment>
        ))}
      </ul>
      ) : (
        <p className="parrafoItem">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam quia
          eligendi enim quam sint. Suscipit ipsa laboriosam iusto doloribus
          recusandae.loren
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam quia
          eligendi enim quam sint. Suscipit ipsa laboriosam iusto doloribus
          recusandae.loren
        </p>
      )}
      <div className="btnConteCompra">
        <button className="btnCompra">Compra ahora</button>
        <button className="btnCarrito">Agregar al carrito</button>
        </div>
    </div>

  </div>
       
      
  );
};

export default ItemDetail;

