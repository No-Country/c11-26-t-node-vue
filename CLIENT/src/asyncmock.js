import axios from "axios";


export const db = ("https://nocountry.clopezpro.com/music/album");




export const getProductos = () => {
  return axios
    .get("https://nocountry.clopezpro.com/music/album")
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error al obtener los productos", error);
      throw error;
    });
};



export const getItem = (_id) => {
  return axios.get('https://nocountry.clopezpro.com/music/album')
    .then((response) => {
      const data = response.data.data;
      const item = data.find((element) => element._id === _id);
      if (item) {
        return item;
      } else {
        throw new Error(`No se encontró ningún elemento con el ID ${_id}`);
      }
    })
    .catch((error) => {
      console.error(`Error al obtener el elemento con ID ${_id}`, error);
      throw error;
    });
};



export const getProductosPorCategoria = (idCategoria) => {
  return axios.get(`https://nocountry.clopezpro.com/music/album?categoria=${idCategoria}`)
    .then((response) => response.data)
    .catch((error) => {
      console.error(`Error al obtener los productos de la categoría ${idCategoria}`, error);
      throw error;
    });
};
