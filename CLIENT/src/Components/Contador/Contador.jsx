import './Contador.css';
import { useState } from 'react';

const Contador = ({inicial, stock}) => {
    const [contador, setcontador] = useState(inicial)
     
    const aumentarContador = () => {
        if (contador < stock) {
            setcontador(contador + 1)
        }
    }

    const disminuirContador = () => {
        if (contador > inicial) {
            setcontador(contador - 1)
        }
    }

    


  return (
    <div className='contenedor'>
     <button className='btnMenos' onClick={ disminuirContador }> - </button>
     <h2 className='numerito'> {contador} </h2>
     <button className='btnMas' onClick={ aumentarContador }> + </button>
     
    </div>
  )
}

export default Contador