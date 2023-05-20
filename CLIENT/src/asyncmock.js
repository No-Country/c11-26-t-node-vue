const productos = [
    {
        id: "David Guetta",
        titulo: "Nothing but the beat | 2011",
        imagen: "../../assets/tapasdedisco/davidguetta.jpg",
        idCat: "dance",
        precio: 500
      },
      {
        id: "David Guetta",
        titulo: "Nothing but the beat | 2011",
        imagen: "../../assets/tapasdedisco/beyonce.jpg",
        idCat: "dance",
        precio: 500
      },
      {
        id: "David Guetta",
        titulo: "Nothing but the beat | 2011",
        imagen: "../../assets/tapasdedisco/gaga.jpg",
        idCat: "dance",
        precio: 500
      },
      {
        id: "David Guetta",
        titulo: "Nothing but the beat | 2011",
        imagen: "../../assets/tapasdedisco/nirvana.jpg",
        idCat: "dance",
        precio: 500
      },
      {
        id: "David Guetta",
        titulo: "Nothing but the beat | 2011",
        imagen: "../../assets/tapasdedisco/aliciakeys.jpg",
        idCat: "dance",
        precio: 500
      },
      {
        id: "David Guetta",
        titulo: "Nothing but the  | 2011",
        imagen: "../../assets/tapasdedisco/Coldplay.png",
        idCat: "dance",
        precio: 500
      },
      {
        id: "David Guetta",
        titulo: "Nothing but the beat | 2011",
        imagen: "../../assets/tapasdedisco/brunomars.jpg",
        idCat: "dance",
        precio: 500
      },
      {
        id: "David Guetta",
        titulo: "Nothing but the beat | 2011",
        imagen: "../../assets/tapasdedisco/imagindragons.jpg",
        idCat: "dance",
        precio: 500
      },
      {
        id: "David Guetta",
        titulo: "Nothing but the beat | 2011",
        imagen: "../../assets/tapasdedisco/fito.jpg",
        idCat: "dance",
        precio: 500
      },
      {
        id: "David Guetta",
        titulo: "Nothing but the beat | 2011",
        imagen: "../../assets/tapasdedisco/billieeilish.jpg",
        idCat: "dance",
        precio: 500
      },
      {
        id: "David Guetta",
        titulo: "Nothing but the beat | 2011",
        imagen: "../../assets/tapasdedisco/eminen.jpg",
        idCat: "dance",
        precio: 500
      },
      {
        id: "David Guetta",
        titulo: "Nothing but the beat | 2011",
        imagen: "../../assets/tapasdedisco/adele.jpg",
        idCat: "dance",
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