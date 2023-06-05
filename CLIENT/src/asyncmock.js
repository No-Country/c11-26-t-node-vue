import axios from "axios";

const API = import.meta.env.VITE_BASE_URL || "https://nocountry.clopezpro.com";

export const db = API;

export const getProductos = () => {
	return axios
		.get(`${API}/music/album`)
		.then((response) => response.data)
		.catch((error) => {
			console.error("Error al obtener los productos", error);
			throw error;
		});
};

export const getItem = (_id) => {
	return axios
		.get(`${API}/music/album/${_id}`)
		.then((response) => {
			const data = response.data;
			console.log(data);
			if (data) {
				switch (data.result) {
					case 1:
						return data.data;
					default:
						throw data.message;
				}
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
	return axios
		.get(`${API}/music/album?categoria=${idCategoria}`)
		.then((response) => response.data)
		.catch((error) => {
			console.error(
				`Error al obtener los productos de la categoría ${idCategoria}`,
				error
			);
			throw error;
		});
};

/*------------------------------------------------------------------------------------------ */

export const dba = `${API}/music/artists`;

export const getArtists = () => {
	return axios
		.get(`${API}/music/artists`)
		.then((response) => response.data)
		.catch((error) => {
			console.error("Error al obtener los productos", error);
			throw error;
		});
};

export const getItemArtists = (_id) => {
	return axios
		.get(`${API}/music/artists`)
		.then((response) => {
			const data = response.data.data;
			const items = data.find((element) => element._id === _id);
			if (items) {
				return items;
			} else {
				throw new Error(`No se encontró ningún elemento con el ID ${_id}`);
			}
		})
		.catch((error) => {
			console.error(`Error al obtener el elemento con ID ${_id}`, error);
			throw error;
		});
};

export const getProductosPorCategoriaArtists = (idCategori) => {
	return axios
		.get(`${API}/music/artists?categoria=${idCategori}`)
		.then((response) => response.data)
		.catch((error) => {
			console.error(
				`Error al obtener los productos de la categoría ${idCategori}`,
				error
			);
			throw error;
		});
};
