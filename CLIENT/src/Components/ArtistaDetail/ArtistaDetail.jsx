import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../ItemDetail/ItemDetail.css';
import '../../App.less';
import Corazon from '../Corazon/Corazon';
import { getItemArtists } from '../../asyncmock';
import './ArtistaDetail.css';

const ArtistaDetail = ({_id, name, picture_xl, bibliography}) => {
    const colores = ['#FFD829', '#FE6927', '#FF80D9', '#4EAFFE', '#FE6927'];
    const [backgroundColor, setBackgroundColor] = useState('');
    const [agregarCantidad, setAgregarCantidad] = useState(0);
    const [itemData, setItemData] = useState(null);

    const manejadorCantidad = (cantidad) => {
        setAgregarCantidad(cantidad);
        console.log('Productos agregados ' + cantidad);
      };
    
      useEffect(() => {
        const indiceAleatori = Math.floor(Math.random() * colores.length);
        const colorAleatori = colores[indiceAleatori];
        setBackgroundColor(colorAleatori);
    
        getItemArtists(_id)
          .then((data) => {
            setItemData(data);
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

    <div className="contenedorItems">
      <img src={itemData?.cover_xl} alt={itemData?.name} className="imgItemDetail" />
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
        <div className="contenedorItem">
      <h2> {name} </h2>
      <h4> us$ {precioto.Fixed(2)}</h4>
      <h4>{id}</h4>
      <img src={picture_xl} alt={titulo} className={name}/>
      <p> {bibliography} </p> 
    </div>
        <div className="btnConteCompra">
          <button className="btnCompra">Compra ahora</button>
          <button className="btnCarrito">Agregar al carrito</button>
        </div>
      </div>

      
    </div>
    
  )
}

export default ArtistaDetail;
