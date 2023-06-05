import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { db } from "../../asyncmock";

const ItemListConteiner = () => {
  const [productos, setProductos] = useState([]);

  const { idCategoria } = useParams();

  

  useEffect(() => {
    console.log(db)
    fetch(db+"/music/album")
      .then(resp =>  resp.json())
      .then(data => {
  
        switch(data.result){
          case 1:
               if (Array.isArray(data.data)) {
                   setProductos(data.data);
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

