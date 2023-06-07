import React, { useContext } from "react";
import { CarritoContext } from "../Contex/CarritoContext";
import "./Cart.less";

const Cart = () => {
  const { carrito, eliminarProducto } = useContext(CarritoContext);

  return (
    <div className="contenedorCart">
      
      {carrito.length === 0 ? (
        <p>No hay productos en el carrito.</p>
      ) : (
        <div>
          {carrito &&
            carrito.map((item,index) => (
              <div key={index}>
                {/*  <p>{JSON.stringify(item.item)}</p> */}
                {item.item && (
                  <>
                   <div className="contenedorCart">
                    <img src={item.item.cover} alt={item.item.title} />
                    <h1 className="tituloCart">Iniciar tu compra</h1>

                    <h3 >{item.item.artist.name}</h3>
                    <p>US ${item.item.price.toFixed(2)}</p>
                    <button onClick={() => eliminarProducto(item.item._id)}>
                      Eliminar
                    </button>
                    </div>
                  </>
                )}
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
