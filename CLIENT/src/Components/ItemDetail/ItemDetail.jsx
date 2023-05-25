import Contador from '../Contador/Contador';
import './ItemDetail.css';
import "../../App.less";
import React, { useState, useEffect } from 'react';

const ItemDetail = ({id, titulo, precio, imagen}) => {

  const colores = ['#FFD829', '#FE6927', '#FF80D9', '#4EAFFE', '#FE6927'];
  const [backgroundColor, setBackgroundColor] = useState('');

  useEffect(() => {
    const indiceAleatorio = Math.floor(Math.random() * colores.length);
    const colorAleatorio = colores[indiceAleatorio];
    setBackgroundColor(colorAleatorio);
  }, []);

  return (
    <div className="contenedorItem" style={{ backgroundColor }}>
      <h2> Articulo: {titulo} </h2>
      <h4> Precio: $ {precio}</h4>
      <h4>{id}</h4>
      <img src={imagen} alt={titulo} className='imgItem'/>
      <Contador inicial={1} stock={10}/>
      <p className='parrafoItem'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam quia eligendi enim quam sint. Suscipit ipsa laboriosam iusto doloribus recusandae.</p>
    </div>
  )
}

export default ItemDetail