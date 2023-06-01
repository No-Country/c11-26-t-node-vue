import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListConteiner = () => {
  const [productos, setProductos] = useState([]);

  const { idCategoria } = useParams();

  useEffect(() => {
    fetch("https://nocountry.clopezpro.com/music/album")
      .then(resp => resp.json())
      .then(data => {
        if (Array.isArray(data)) {
          setProductos(data);
          console.log(data); // Verificar los datos en la consola
        } else {
          console.log("La respuesta de la API no es un array válido");
        }
      })
      .catch(error => console.log(error));
  }, [idCategoria]);

  return (
    <div>
      {
        productos.map(producto => {
          return (
            <h4 key={producto.title}>{producto._id}</h4>
          )
        })
      }
      <ItemList productos={productos} />
    </div>
  );
};

export default ItemListConteiner;

