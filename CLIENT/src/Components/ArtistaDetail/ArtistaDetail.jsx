import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../App.less";
import Corazon from "../Corazon/Corazon";
import { getItemArtists } from "../../asyncmock";
import "./ArtistaDetail.css";
import "../ItemDetail/ItemDetail.css";

const ArtistaDetail = ({ _id, name, picture_xl }) => {
  const [itemData, setItemData] = useState(null);
  const [albumDBID, setAlbumDBID] = useState(null);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    getItemArtists(_id)
      .then((data) => {
        setItemData(data);
        setAlbumDBID(data.albumDBID);
      })
      .catch((error) => {
        console.error(`Error al obtener el producto con ID ${_id}`, error);
      });
  }, [_id]);

  const handleClickCanciones = () => {
    setIsClicked(true);
  };

  const handleClickResumen = () => {
    setIsClicked(false);
  };

  return (
    <div className="contenedorArtistas">
      <img
        className="imgArtistaDetail"
        src={itemData?.picture_xl}
        alt={itemData?.name}
      />
      <div className="contenedorArtistaDetail">
        <div className="navArtistaDetail">
          <ul className="ulArtistaDetail">
            <Link to="/home" className="liADetail1">
              INICIO/
            </Link>
            <Link to="/artists" className="liADetail2">
              ARTISTAS/
            </Link>
          </ul>
          <div className="corazonArt">
            <Corazon _id={_id} />
          </div>
        </div>
        <div className="contenedorADetail">
          <h2 className="h2ArtistaDetail"> {name} </h2>

          <div className="btnADetail">
            <button
              className={`btnCanciones ${isClicked ? "clicked" : ""}`}
              onClick={handleClickCanciones}
            >
              Álbumes
            </button>
            <button
              className={`btnResumen ${isClicked ? "clicked" : ""}`}
              onClick={handleClickResumen}
            >
              Acerca de
            </button>
          </div>
          {isClicked ? (
            <ul className="listaArtista">
              {albumDBID && (
                <div className="albunesArtistas">
                  <ul className="ulAlbunesArtistas">
                    {albumDBID.map((album) => (
                      <li className="liArtista" key={album._id}>
                        {album.title}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </ul>
          ) : (
            <p className="parrafoArtista">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam
              quia eligendi enim quam sint. Suscipit ipsa laboriosam iusto
              doloribus recusandae.loren Lorem ipsum dolor sit, amet consectetur
              adipisicing elit. Aliquam quia eligendi enim quam sint. Suscipit
              ipsa laboriosam iusto doloribus recusandae.loren
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ArtistaDetail;
