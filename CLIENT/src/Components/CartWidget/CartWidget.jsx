import  './CartWidget.css';
import { Link } from 'react-router-dom';
import { CarritoContext } from "../Contex/CarritoContext"
import { useContext } from 'react';
const CartWidget = () => {
  const { carrito, totalCantidad } = useContext(CarritoContext);
  return (
    <Link className='numeritoLink' to='/cart'>
              <img src={"../../../assets/home-icons/shopping-cart.svg"} alt="Cart" />
              {totalCantidad > 0 && <span className='numerito'> {totalCantidad} </span>}
    </Link>
  )
}

export default CartWidget