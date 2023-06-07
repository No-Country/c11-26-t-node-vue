import { Link } from 'react-router-dom';
import './Contador.css';
import { useState } from 'react';

const Contador = ({inicial, funcionAgregar}) => {
    const [contador, setcontador] = useState(inicial)
     
    const aumentarContador = () => {
        if (contador < 10) {
            setcontador(contador + 1)
        }
    }

    const disminuirContador = () => {
        if (contador > 1) {
            setcontador(contador - 1)
        }
    }

  return (
    <>
    <div className='contenedor'>
     <button className='btnMenos' onClick={ disminuirContador }> - </button>
     <h2 className='numerito'> {contador} </h2>
     <button className='btnMas' onClick={ aumentarContador }> + </button>
    </div>
    <Link to='*' onClick={() => funcionAgregar(contador)} className="btnCarrito">Agregar al Carrito</Link>
    </>
  )
}

export default Contador