import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Artists = ({_id, cover, artist}) => {
    const color = ['#FFD829', '#FE6927', '#FF80D9', '#4EAFFE', '#FE6927'];
    const [backgroundColor, setBackgroundColor] = useState('');
  
    useEffect(() => {
      const indiceAleator = Math.floor(Math.random() * color.length);
      const colorAleator = color[indiceAleator];
      setBackgroundColor(colorAleator);
    }, []);


  return (
    <Link to={`/artista/${_id}`} className="cardProducto" style={{ backgroundColor }}>
      <div className="contenedorCardArtista">
        <img src={ cover } alt={title} className="imgCard" />
        <div>
          <span className="artista">{artist}</span>
          
        </div>
      </div>
    </Link>
  )
}

export default Artists
