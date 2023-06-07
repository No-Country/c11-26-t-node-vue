import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import Carrusel from "../Carrusel/Carrusel";
import { getArtists } from "../../asyncmock";
import "./Artistas.css";

const Artistas = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [artists, setArtists] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    getArtists()
      .then((data) => {
        setArtists(data);
      })
      .catch((error) => {
        console.error(`Error al obtener el producto con ID ${_id}`, error);
      });

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {isMobile ? (
        <Carrusel />
      ) : (
        <>
      <div className="artistasContainerHome">
        <img
          className="artistasImgHome"
          src={"../../assets/microfono.svg"}
          alt="Logo microfono"
        />
        <span className="artistash2Home">artistas</span>
      </div>
      <div className="contenedorArt">
        
         {artists?.data?.map((artist, index) => 
         
           { 
                  switch (index) {
                          case 0:
                            return (
                                  <React.Fragment key={index}>
                                    {
                                      <div className="frankFreddie">
                                                      <img
                                                        className="imgArt1"
                                                        src={artist.picture_xl}
                                                        alt={artist.name}
                                                      /> 
                                                      <img
                                                        className="imgArt5"
                                                        src={artists.data[index+1].picture_xl}
                                                        alt={artists.data[index+1].name}
                                                      />
                                                      
                                        </div>
                                        
                                    }
                                  </React.Fragment>
                              )
                           case 2:
                            return (
                                  <React.Fragment key={index}>
                                    {
                                      <div className="contenedorGrupoA">
                                              <div className="grupoUno">
                                                <img
                                                  className="imgArt2"
                                                  src={artists.data[index].picture_xl}
                                                  alt={artists.data[index].name}
                                                />
                                                <img
                                                  className="imgArt3"
                                                  src={artists.data[index+1].picture_xl}
                                                  alt={artists.data[index+1].name}
                                                />
                                                <img
                                                  className="imgArt4"
                                                  src={artists.data[index+2].picture_xl}
                                                  alt={artists.data[index+2].name}
                                                />
                                              </div>

                                              <div className="ladyMateo">
                                                <img
                                                  className="imgArt6"
                                                   src={artists.data[index+3].picture_xl}
                                                  alt={artists.data[index+3].name}
                                                />
                                                <img
                                                  className="imgArt7"
                                                   src={artists.data[index+4].picture_xl}
                                                  alt={artists.data[index+4].name}
                                                />
                                              </div>

                                              <div className="grupoDos">
                                                <img
                                                  className="imgArt8"
                                                   src={artists.data[index+5].picture_xl}
                                                  alt={artists.data[index+5].name}
                                                />
                                                <img
                                                  className="imgArt9"
                                                   src={artists.data[index+6].picture_xl}
                                                  alt={artists.data[index+6].name}
                                                />
                                                
                                              </div>
                                        </div>
                                        
                                    }
                                  </React.Fragment>
                              )
                         
                      
                        default:
                          (<div>ss</div>)
                          break;
                    }
          }
          )}
      
      </div>
        <Link className="btnVerMas" to='/artists' >Ver más</Link>
    </>
      )}
      
    </>
  );
};

export default Artistas;

