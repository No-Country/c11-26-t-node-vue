import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { CarritoContext } from "../Contex/CarritoContext";
import "./Checkout.less";

const Checkout = () => {
  const { carrito, eliminarProducto } = useContext(CarritoContext);
  const storedCarrito = JSON.parse(localStorage.getItem('carrito')) || [];
  
  useEffect(() => {
    localStorage.setItem('carrito', JSON.stringify(carrito));
  }, [carrito]);

  const total = storedCarrito.reduce(
    (accumulator, producto) => accumulator + producto.item.price,
    0
  );

  const orden = {
    items: storedCarrito.map((producto) => ({
      id: producto.item._id,
      titulo: producto.item.title,
      precio: producto.cantidad,
    })),
    total: storedCarrito.reduce(
      (total, producto) => total + producto.item.price,
      0
    ),
  };

  return (
    <section className="finalizarCompra">
      <div className="contedorCompra">
        <div className="conteCartInicio">
          <ul className="ulChec">
            <Link to="/home" className="liChec">
              INICIO/
            </Link>
            <Link to="/album" className="liChec2">
              CATALOGO/
            </Link>
            <Link className="liChec3" to="/cart">
              VOLVER AL CARRITO/
            </Link>
          </ul>
        </div>
        <h2 className="h2finalCompra">Finalizar Compra</h2>
        <p className="pFinalCompra">
          A continuación, puedes revisar los detalles de tu compra y completar
          el proceso de pago.
        </p>
        <section className="conteAlbumCompra">
          {storedCarrito.map((prod) => (
            <div key={prod.item._id}>
              <div className="conteCompra">
                <div className="conetAA">
                  <img
                    className="imgCompra"
                    src={prod.item.cover}
                    alt={prod.item.title}
                  />
                  <span className="bold">
                    Artista{" "}
                    <span className="letraGris">
                      {prod.item.artist.name}
                    </span>
                  </span>
                  <span className="bold">
                    Album{" "}
                    <span className="letraGris">{prod.item.title}</span>
                  </span>
                  <span className="bold">
                    Precio US${" "}
                    <span className="letraGris">
                      {prod.item.price.toFixed(2)}
                    </span>
                  </span>
                </div>
                <button
                  className="btnEliminarCompra"
                  onClick={() => eliminarProducto(prod.item._id)}
                >
                  Eliminar
                </button>
              </div>
            </div>
          ))}
        </section>
        <hr />
        <p className="totalCompra">Total: US $ {total.toFixed(2)}</p>
        <Link to='/pagar'
          className="btnPagar"
          
        >
          Pagar
        </Link>
      </div>
    </section>
  );
};

export default Checkout;
