import React, { useEffect, useState } from "react";
import Carrusel from "../Carrusel/Carrusel";
import "./Artistas.css";

const Artistas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

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
        <div className="frankFreddie">
          <img
            className="imgArt1"
            src={"../../assets/Artistas-Home/FrankSinatra.svg"}
            alt="Frank Sinatra"
          />
          <img
            className="imgArt5"
            src={"../../assets/Artistas-Home/FreddieMercury.svg"}
            alt="Freddie Mercury"
          />
        </div>

        <div className="contenedorGrupoA">
          <div className="grupoUno">
            <img
              className="imgArt2"
              src={"../../assets/Artistas-Home/EdSheeran.svg"}
              alt="Ed Sheeran"
            />
            <img
              className="imgArt3"
              src={"../../assets/Artistas-Home/Beyoncé.svg"}
              alt="Beyoncé"
            />
            <img
              className="imgArt4"
              src={"../../assets/Artistas-Home/DaddyYankee.svg"}
              alt="Daddy Yankee"
            />
          </div>

          <div className="ladyMateo">
            <img
              className="imgArt6"
              src={"../../assets/Artistas-Home/LadyGaga.svg"}
              alt="Lady Gaga"
            />
            <img
              className="imgArt7"
              src={"../../assets/Artistas-Home/MateoSujatovich.svg"}
              alt="MateoSu jatovich"
            />
          </div>

          <div className="grupoDos">
            <img
              className="imgArt8"
              src={"../../assets/Artistas-Home/AliciaKeys.svg"}
              alt="Alicia Keys"
            />
            <img
              className="imgArt9"
              src={"../../assets/Artistas-Home/HarryStyles.svg"}
              alt="Harry Styles"
            />
            <img
              className="imgArt10"
              src={"../../assets/Artistas-Home/JenniferLopez.svg"}
              alt="Jennifer Lopez"
            />
          </div>
        </div>
      </div>
        <button className="btnVerMas">Ver más</button>
    </>
      )}
      
    </>
  );
};

export default Artistas;

