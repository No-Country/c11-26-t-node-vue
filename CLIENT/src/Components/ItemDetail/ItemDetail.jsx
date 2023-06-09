  import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./ItemDetail.css";
import "../../App.less";
import Corazon from "../Corazon/Corazon";
import AudioPlayer from "../AudioPlayer/AudioPlayer";
import playIcon from "../../../assets/Iconos-Artistas-Home/play.svg";
import { getItem } from "../../asyncmock";
import { useContext } from "react";
import { CarritoContext } from "../Contex/CarritoContext";

const ItemDetail = ({ _id }) => {
  const colores = ["#FFD829", "#FE6927", "#FF80D9", "#4EAFFE", "#FE6927"];
  const [backgroundColor, setBackgroundColor] = useState("");
  const [agregarCantidad, setAgregarCantidad] = useState(0);
  const [isClicked, setIsClicked] = useState(false);
  const [selectedAudio, setSelectedAudio] = useState(null);
  const [itemData, setItemData] = useState(null);

  const { agregarProductos } = useContext(CarritoContext);

  const handleClickAgregarCarrito = () => {
    const item = { ...itemData };
    console.log("Agregando producto al carrito:", item);
    agregarProductos(item, 1);
  };

  const handleClickCanciones = () => {
    setIsClicked(true);
  };

  const handleClickResumen = () => {
    setIsClicked(false);
  };

  useEffect(() => {
    const indiceAleatorio = Math.floor(Math.random() * colores.length);
    const colorAleatorio = colores[indiceAleatorio];
    setBackgroundColor(colorAleatorio);

    getItem(_id)
      .then((data) => {
        setItemData(data);
      })
      .catch((error) => {
        console.error(`Error al obtener el producto con ID ${_id}`, error);
      });
  }, [_id]);

  return (
    <div className="contenedorItem">
      <img
        src={itemData?.cover_xl}
        alt={itemData?.title}
        className="imgItemDetail"
      />
      <div className="contenedorDetail">
        <div className="navDetail">
          <ul className="ulDetail">
            <Link to="/home" className="liDetail1">
              INICIO/
            </Link>
            <Link to="/album" className="liDetail2">
              CATALOGO/
            </Link>
          </ul>
          <Corazon _id={_id} />
        </div>
        <h2 className="artistaDetail">{itemData?.artist.name}</h2>
        <div className="contenedorPrecioDetail">
          <h3 className="tituloDetail">{itemData?.title}</h3>
          <h4 className="precioDetail">US $ {itemData?.price.toFixed(2)}</h4>
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
            {itemData?.music?.map((cancion, index) => (
              <React.Fragment key={index}>
                <li className="cataPlay">
                  <div className="play1">
                  <img
                    className="play"
                    src={playIcon}
                    alt="Play"
                    onClick={() => setSelectedAudio(cancion._id)}
                  /> </div>
                  <div className="titulo1">
                  {cancion.title} {cancion.duration}Min</div>
                  <div>
                    <audio
                      className="audio"
                      src={cancion.preview}
                      controls="controls"
                      preload="none"
                    ></audio>
                  </div>
                </li>
                {index !== itemData?.music.length - 1 && (
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
          <Link
            onClick={handleClickAgregarCarrito}
            className="btnCompra"
            to="/checkout"
          >
            Finalizar compra
          </Link>

          <Link
            to="/cart"
            className="btnCarrito"
            onClick={handleClickAgregarCarrito}
          >
            Agregar al carrito
          </Link>
        </div>
      </div>

      {selectedAudio !== null && (
        <AudioPlayer
          audioFiles={itemData?.audioFiles}
          selectedAudio={selectedAudio}
        />
      )}
    </div>
  );
};

export default ItemDetail;
