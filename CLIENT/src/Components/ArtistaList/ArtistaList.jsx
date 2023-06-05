import Artists from "../Artists/Artists";
import "../ItemList/ItemList.css";

const ArtistaList = ({ productos }) => {
  // Mezclar el arreglo de productos de forma aleatoria
  const productosAleatorio = productos.sort(() => Math.random() - 0.5);
  // Obtener solo los primeros 12 productos aleatorios
  const productosLimitado = productosAleatorio.slice(0, 12);
  return (
    <div className="contendorProductos">
      {productosLimitado.map((prod) => (
        <Artists key={prod._id} {...prod} />
      ))}
    </div>
  );
};

export default ArtistaList;

