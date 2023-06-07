import { useState, useEffect } from "react";
import { getItemArtists } from "../../asyncmock";
import ArtistaDetail from "../ArtistaDetail/ArtistaDetail";
import { useParams } from "react-router-dom";

const ArtistaDetailContainer = () => {
    const [producto, setProducto] = useState(null);

    const { idItems } = useParams();
  
    useEffect(() => {
      getItemArtists(idItems)
      .then((res) => setProducto(res));
    }, [idItems]);

  return (
    <div>
      {producto && <ArtistaDetail _id={idItems} {...producto} />}
    </div>
  )
}

export default ArtistaDetailContainer
