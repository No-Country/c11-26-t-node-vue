import { Link } from 'react-router-dom';


const ModalRegistro = () => {
    
  return (
    <div className='modalBackground'>
        <div className='modalContainer'>
            <div className='mensaje'>
                <h2>Registro de usuario exitoso</h2>
            </div>
            <div className='cuerpo'>
                <h4>¡Todo listo! Comienza a explorar en Music Estudio y descubre tu ritmo</h4>
            </div>
            <div className='pie'>
                <Link to="*"> <button>Inicar sesión</button> </Link>
            </div>
        </div>
      
    </div>
  )
}

export default ModalRegistro;
