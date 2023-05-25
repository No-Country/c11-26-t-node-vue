const productos = [
    {
        id: "Bavid Guetta",
        titulo: "Nothing but the beat | 2011",
        imagen: "../../assets/tapasdedisco/davidguetta.jpg",
        idCat: "dance",
        precio: 500,
        stock: 10,
        background: "#FFD829"
      },
      {
        id: "Beyonce",
        titulo: "Beyoncé 4| 2011",
        imagen: "../../assets/tapasdedisco/beyonce.jpg",
        idCat: "r&b",
        stock: 10,
        precio: 500
      },
      {
        id: "Lady Gaga",
        titulo: "The fame monster | 2010",
        imagen: "../../assets/tapasdedisco/gaga.jpg",
        idCat: "pop",
        stock: 10,
        precio: 500
      },
      {
        id: "Nirvana",
        titulo: "Nevermanind | 1991",
        imagen: "../../assets/tapasdedisco/nirvana.jpg",
        idCat: "rock",
        stock: 10,
        precio: 500
      },
      {
        id: "Alicia Keys",
        titulo: "Here | 2016",
        imagen: "../../assets/tapasdedisco/aliciakeys.jpg",
        idCat: "r&b",
        stock: 10,
        precio: 500
      },
      {
        id: "Coldplay",
        titulo: "Parachutes  | 2010",
        imagen: "../../assets/tapasdedisco/Coldplay.png",
        idCat: "rock",
        stock: 10,
        precio: 500
      },
      {
        id: "Bruno Mars",
        titulo: "Runaaway baby | 2010",
        imagen: "../../assets/tapasdedisco/brunomars.jpg",
        idCat: "pop",
        stock: 10,
        precio: 500
      },
      {
        id: "Imagine Dragons",
        titulo: "Evolve | 2017",
        imagen: "../../assets/tapasdedisco/imagindragons.jpg",
        idCat: "rock",
        stock: 10,
        precio: 500
      },
      {
        id: "Fito Paez",
        titulo: "Rey y sol | 2000",
        imagen: "../../assets/tapasdedisco/fito.jpg",
        idCat: "rock",
        stock: 10,
        precio: 500
      },
      {
        id: "Billie Eilish",
        titulo: "Happier than ever | 2021",
        imagen: "../../assets/tapasdedisco/billieeilish.jpg",
        idCat: "pop",
        stock: 10,
        precio: 500
      },
      {
        id: "Eminem",
        titulo: "Recovery | 2010",
        imagen: "../../assets/tapasdedisco/eminen.jpg",
        idCat: "dance",
        stock: 10,
        precio: 500
      },
      {
        id: "Adele",
        titulo: "Adele 21 | 2011",
        imagen: "../../assets/tapasdedisco/adele.jpg",
        idCat: "pop",
        stock: 10,
        precio: 500
      },

]

export const getProductos = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(productos);
    }, 100);
  });
};
  
  
  
  export const getIntem = (id) => {
    return new Promise (resolve => {
      setTimeout ( () => {
        const producto = productos.find(prod => prod.id === id);
        resolve(producto);
      }, 100)
    })
  }
  
  export const getProductosPorCategoria = (idCatergoria) => {
    return new Promise (resolve => {
      setTimeout(() => {
        const productosCategoria = productos.filter(prod => prod.idCat === idCatergoria);
          resolve(productosCategoria);
      }, 100)
    })
  }  