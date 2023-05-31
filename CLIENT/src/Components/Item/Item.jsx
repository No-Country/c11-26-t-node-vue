import "./Item.css";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';

const Item = ({ id, titulo, precio, imagen, idCat, color }) => {
  const agregarProd = () => {
    console.log(id);
  };


  const colores = ['#FFD829', '#FE6927', '#FF80D9', '#4EAFFE', '#FE6927'];
  const [backgroundColor, setBackgroundColor] = useState('');

  useEffect(() => {
    const indiceAleatorio = Math.floor(Math.random() * colores.length);
    const colorAleatorio = colores[indiceAleatorio];
    setBackgroundColor(colorAleatorio);
  }, []);


  return (
    <div className="cardProducto" style={{ backgroundColor }}>
      <div className="contenedorCardArtista">
      <img src={imagen} alt={titulo} className="imgCard" />
      <div>
      <span className="artista">{id}</span>
      <span className="album">{titulo}</span>
      </div>
      {
        //<p>$ {precio}</p>
        //<p>{id}</p>
        //<p>{idCat}</p>
        //<Link to={`/item/${id}`} className='btnInfo' > Info </Link>
        //<button className='btnAgregar' onClick={ agregarProd }>AGREGAR</button>
      }
      </div>
    </div>
  );
};

export default Item;
