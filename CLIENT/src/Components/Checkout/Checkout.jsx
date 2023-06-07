import React from 'react';
import { Link } from 'react-router-dom';

const Checkout = () => {
  return (
    <div>
      <h2>Finalizar Compra</h2>
      <p>A continuación, puedes revisar los detalles de tu compra y completar el proceso de pago.</p>
      <button onClick={() => console.log('Botón de Pago')}>Pagar</button>
      <Link to='/cart'>Volver al carrito</Link>
    </div>
  );
}

export default Checkout;

