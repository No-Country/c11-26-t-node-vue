import { useContext } from "react"
import { CarritoContext } from "../Contex/CarritoContext"

const CartItem = ({item, cantidad}) => {
    const {eliminarProducto} = useContext(CarritoContext);

  return (
    <div className='contenedorCart'>
        <div className='cuerpoCart'>
            <h2 className='tituloCart'>Cart</h2>
            <div className='lineaCart'></div>
            <div className='lineaCart2'></div>
            <h4>{item.name}</h4>
            <h4>{item.title}</h4>
            <h4>{item.name}</h4>
            <h4>{cantidad}</h4>
            <h4>{item.precio}</h4>
            <button onClick={() => eliminarProducto(item._id)}>Eliminar Producto</button>
        </div>
    </div>
  )
}

export default CartItem
