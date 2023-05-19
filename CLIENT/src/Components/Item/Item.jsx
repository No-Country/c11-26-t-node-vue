import './Item.css';
import { Link } from 'react-router-dom';

const Item = ({id, titulo, precio, imagen, idCat}) => {

  const agregarProd = () => {
    console.log(id);
}

  return (
    <div className="cardProducto">
      
      <img src={imagen} alt={titulo} className='imgCard'/>
      <h3>{titulo}</h3>
      {
      //<p>$ {precio}</p>
      //<p>{id}</p>
      //<p>{idCat}</p>
    
      //<Link to={`/item/${id}`} className='btnInfo' > Info </Link>

      //<button className='btnAgregar' onClick={ agregarProd }>AGREGAR</button>
    }
    </div>
  )
}

export default Item