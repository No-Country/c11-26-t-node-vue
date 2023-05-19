import Contador from '../Contador/Contador';
import './ItemDetail.css';

const ItemDetail = ({id, titulo, precio, imagen}) => {
  return (
    <div className="contenedorItem">
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