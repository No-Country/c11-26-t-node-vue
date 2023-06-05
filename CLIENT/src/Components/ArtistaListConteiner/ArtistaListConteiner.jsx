import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { dba } from "../../asyncmock";
import ArtistaList from "../ArtistaList/ArtistaList"


const ArtistaListConteiner = () => {
    const [productos, setProductos] = useState([]);

    const { idCategori } = useParams();
  
    
  
    useEffect(() => {
      
      fetch(dba)
        .then(resp => resp.json())
        .then(data => {
          switch(data.result){
            case 1:
                 if (Array.isArray(data.data)) {
                     setProductos(data.data);
                    console.log(dba); 
                  } else {
                    alert("La respuesta de la API no es un array válido");
                  }
              break;
            default:
              throw data.message;
          }
        })
        .catch(error => console.log(error));
    }, [idCategori]);
  return (
    <div>
      <ArtistaList productos={productos} />
    </div>
  )
}

export default ArtistaListConteiner
