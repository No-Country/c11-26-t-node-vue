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
        switch(data.result){
          case 1:
               if (Array.isArray(data.data)) {
                   setProductos(data.data);
                  //console.log(data.data); // Verificar los datos en la consola
                } else {
                  alert("La respuesta de la API no es un array válido");
                }
            break;
          default:
            throw data.message;
        }
      })
      .catch(error => console.log(error));
  }, [idCategoria]);

  return (
    <div>
      <ItemList productos={productos} />
    </div>
  );
};

export default ItemListConteiner;

