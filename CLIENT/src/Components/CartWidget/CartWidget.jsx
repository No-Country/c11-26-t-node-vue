import  './CartWidget.css';
import { Link } from 'react-router-dom';

const CartWidget = () => {
  return (
    <Link to='/cart'>
              <img src={"../../../assets/home-icons/shopping-cart.svg"} alt="Cart" />
    </Link>
  )
}

export default CartWidget