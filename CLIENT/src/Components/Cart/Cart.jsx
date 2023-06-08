import React, { useContext, useEffect } from "react";
import { CarritoContext } from "../Contex/CarritoContext";
import { Link } from "react-router-dom";
import Chicosonriendo from "../../../assets/Formassimples/Chicosonriendo.png";
import "./Cart.less";

const Cart = () => {
  const { carrito, eliminarProducto } = useContext(CarritoContext);
  

  useEffect(() => {
    localStorage.setItem('carrito', JSON.stringify(carrito));
  }, [carrito]);

  return (
    <div className="contenedorCart">
      {carrito.length === 0 ? (
        <section className="conteNo">
          <div className="conteNoProd">
            <div className="conteNoP">
              <p className="noProducto"> No hay productos en el carrito.</p>
              <Link className="seguirNavegando" to="/album">
                Seguir comprando
              </Link>
            </div>
            <img
              className="chico"
              src={Chicosonriendo}
              alt="Chico sonriendo"
            />
          </div>
        </section>
      ) : (
        <div>
          {carrito &&
            carrito.map((item, index) => (
              <div key={index}>
                {item.item && (
                  <>
                    <div className="contenedorCartDetalle">
                      <img
                        className="imgCart"
                        src={item.item.cover_xl}
                        alt={item.item.title}
                      />
                      <div className="detalleCart">
                        <div className="conteCartInicio">
                          <ul className="ulCart">
                            <Link to="/home" className="liCard">
                              INICIO/
                            </Link>
                            <Link to="/album" className="liCard2">
                              CATALOGO/
                            </Link>
                          </ul>
                        </div>
                        <h2 className="tituloCart">Iniciar tu compra</h2>
                        <h3 className="detalle">Detalles</h3>
                        <section className="contenedorSection">
                          <div className="cartPrincipal">
                            <h3 className="autor">Autor</h3>
                            <h3 className="disco">Disco</h3>
                            <h3 className="formatoMp3">Formato </h3>
                            <h3 className="tipo">Tipo </h3>
                            <h3 className="precio">Total</h3>
                          </div>

                          <div className="cartSecundaria">
                            <span className="autorRender">
                              {item.item.artist.name}
                            </span>
                            <span className="discoRender">
                              {item.item.title}
                            </span>
                            <span className="mp3">MP3</span>
                            <span className="digital">Digital</span>
                            <span className="us">
                              US ${item.item.price.toFixed(2)}
                            </span>
                          </div>
                        </section>
                        <button
                          className="btnEliminar"
                          onClick={() => eliminarProducto(item.item._id)}
                        >
                          Eliminar
                        </button>
                        <Link  className="btnFinalCompra" to="/checkout">
                          Finalizar compra
                        </Link>
                      </div>
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

