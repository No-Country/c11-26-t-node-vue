import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Item.css';
import '../../App.less';

const Item = ({ _id, title, cover, artist}) => {
  const agregarProd = () => {
    console.log(_id);
  };
  console.log(_id)
  const colores = ['#FFD829', '#FE6927', '#FF80D9', '#4EAFFE', '#FE6927'];
  const [backgroundColor, setBackgroundColor] = useState('');

  useEffect(() => {
    const indiceAleatorio = Math.floor(Math.random() * colores.length);
    const colorAleatorio = colores[indiceAleatorio];
    setBackgroundColor(colorAleatorio);
  }, []);

  return (
    <Link to={`/item/${_id}`} className="cardProducto" style={{ backgroundColor }}>
      <div className="contenedorCardArtista">
        <img src={ cover } alt={title} className="imgCard" />
        <div>
          <span className="artista">{artist.name}</span>
          <span className="album">{title}</span>
        </div>
      </div>
    </Link>
  );
};

export default Item;

