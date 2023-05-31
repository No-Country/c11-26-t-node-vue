import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Item.css';
import '../../App.less';

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
    <Link to={`/item/${id}`} className="cardProducto" style={{ backgroundColor }}>
      <div className="contenedorCardArtista">
        <img src={imagen} alt={titulo} className="imgCard" />
        <div>
          <span className="artista">{id}</span>
          <span className="album">{titulo}</span>
        </div>
      </div>
    </Link>
  );
};

export default Item;
