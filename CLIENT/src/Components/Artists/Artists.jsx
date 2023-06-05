import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../Item/Item.css";
import "../ItemList/ItemList.css"
import "../../App.less";
import "../../App.less";

const Artists = ({ _id, picture_medium, name }) => {
  const color = ["#FFD829", "#FE6927", "#FF80D9", "#4EAFFE", "#FE6927"];
  const [backgroundColor, setBackgroundColor] = useState("");

  useEffect(() => {
    const indiceAleator = Math.floor(Math.random() * color.length);
    const colorAleator = color[indiceAleator];
    setBackgroundColor(colorAleator);
  }, []);

  return (
    <>
      <Link
        to={`/artista/${_id}`}
        className="cardProducto"
        style={{ backgroundColor }}
      >
        <div className="contenedorCardArtista">
          <img src={picture_medium} alt={name} className="imgCard" />
          <div>
            <span className="artista">{name}</span>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Artists;
