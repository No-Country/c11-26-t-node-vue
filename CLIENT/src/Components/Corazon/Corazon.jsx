import React, { useState, useEffect } from "react";

const Corazon = ({ id }) => {
  const [imageSrc, setImageSrc] = useState(
    "../../../assets/Iconos-Artistas-Home/corazon-vacio.svg"
  );

  const [corazonVacioSrc, setCorazonVacioSrc] = useState(
    "../../../assets/Iconos-Artistas-Home/corazon-vacio.svg"
  );
  const [corazonLlenoSrc, setCorazonLlenoSrc] = useState(
    "../../../assets/Iconos-Artistas-Home/corazon-lleno.svg"
  );

  useEffect(() => {
    const savedImageSrc = localStorage.getItem(`corazonImageSrc_${id}`);
    if (savedImageSrc) {
      setImageSrc(savedImageSrc);
    }
  }, [id]);

  const handleClick = () => {
    let newImageSrc;
    if (imageSrc === corazonVacioSrc) {
      newImageSrc = corazonLlenoSrc;
    } else {
      newImageSrc = corazonVacioSrc;
    }
    setImageSrc(newImageSrc);
    localStorage.setItem(`corazonImageSrc_${id}`, newImageSrc);
  };

  return (
    <img
      src={imageSrc}
      alt="Imagen"
      onClick={handleClick}
      className="corazonVacio"
    />
  );
};

export default Corazon;
