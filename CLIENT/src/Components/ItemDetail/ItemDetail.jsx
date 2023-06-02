import Contador from "../Contador/Contador";
import "./ItemDetail.css";
import "../../App.less";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Corazon from "../Corazon/Corazon";
import AudioPlayer from "../AudioPlayer/AudioPlayer";
import playIcon from "../../../assets/Iconos-Artistas-Home/play.svg";


const ItemDetail = ({ _id, title, precio, cover, stock }) => {
  const colores = ["#FFD829", "#FE6927", "#FF80D9", "#4EAFFE", "#FE6927"];
  const [backgroundColor, setBackgroundColor] = useState("");
  const [agregarCantidad, setAgregarCantidad] = useState(0);
  const [isClicked, setIsClicked] = useState(false);
  const [selectedAudio, setSelectedAudio] = useState(null);

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

  const canciones = [
    "Canción 1",
    "Canción 2",
    "Canción 3",
    "Canción 4",
    "Canción 5",
  ];

  const audioFiles = [
    {
      id: 1,
      url: "https://cdns-preview-b.dzcdn.net/stream/c-b2fba8fa64bfb40b6c11bacef08f79d5-9.mp3",
    },
    {
      id: 2,
      url: "https://cdns-preview-b.dzcdn.net/stream/c-b2fba8fa64bfb40b6c11bacef08f79d5-9.mp3",
    },
    {
      id: 3,
      url: "https://cdns-preview-b.dzcdn.net/stream/c-b2fba8fa64bfb40b6c11bacef08f79d5-9.mp3",
    },
  ];
  return (
    <div className="contenedorItem">
      <img src={cover} alt={title} className="imgItemDetail" />
      <div className="contenedorDetail">
        <div className="navDetail">
          <ul className="ulDetail">
            <Link to="/home" className="liDetail1">
              INICIO/
            </Link>
            <Link to="/catalogo" className="liDetail2">
              CATALOGO/
            </Link>
          </ul>
          <Corazon id={id} />
        </div>
        <h2 className="artistaDetail"> {_id} </h2>
        <div className="contenedorPrecioDetail">
          <h3 className="tituloDetail"> {title} </h3>
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
                <li>
                  <img
                    className="play"
                    src={playIcon}
                    alt="Play"
                    onClick={() => setSelectedAudio(cancion._id)}
                  />
                  {cancion}
                </li>
                {index !== canciones.length - 1 && (
                  <hr className="lineaSeparacion" />
                )}
              </React.Fragment>
            ))}
          </ul>
        ) : (
          <p className="parrafoItem">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam
            quia eligendi enim quam sint. Suscipit ipsa laboriosam iusto
            doloribus recusandae.loren Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Aliquam quia eligendi enim quam sint. Suscipit
            ipsa laboriosam iusto doloribus recusandae.loren
          </p>
        )}
        <div className="btnConteCompra">
          <button className="btnCompra">Compra ahora</button>
          <button className="btnCarrito">Agregar al carrito</button>
        </div>
      </div>

      {selectedAudio !== null && (
        <AudioPlayer audioFiles={audioFiles} selectedAudio={selectedAudio} />
      )}
    </div>
  );
};

export default ItemDetail;

