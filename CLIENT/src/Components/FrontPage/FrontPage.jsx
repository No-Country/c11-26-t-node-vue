import "../../App.less";



const FrontPage = () => {
  return (
    <>
      <div className="contenedorNaranja">
        <img
          className="estrellaNaranja"
          src={"../assets/Formassimples/EstrellaNaranja.svg"}
          alt="Estrella Naranja"
        />
      </div>
      <div className="frontpage">
        <div className="text">
          <h1>
            <span className="pink">Descubre </span>
            <span className="yellow">el ritmo </span>
            <span className="l-blue">que mueve </span>
            <span className="white">tu alma</span>
          </h1>
          <div className="contenedorElipseGrande">
            <img
              className="elipseGrande"
              src={"../assets/Formassimples/ElipseGrande.svg"}
              alt="Elipse Grande"
            />
          </div>
          <p className="parrafoLandig">
            Encuentra tus artistas favoritos, géneros apasionantes y álbumes
            icónicos. ¡Empieza a disfrutar de la música que amas hoy mismo!
          </p>
          
        </div>
        <div className="logoContenedor">
          <div className="contenedorEPequena">
            <img
              className="elipsePequena"
              src={"../assets/Formassimples/ElipsePequena.svg"}
              alt="Elipse Pequeña"
            />
          </div>

          <img className="logoPrincipal" src="/logo.png" alt="Logo" />

          <div className="contenedorAmarilla">
            <img
              className="estrellaAmarilla"
              src={"../assets/Formassimples/EstrellaAmarilla.svg"}
              alt="Estrella Amarilla"
            />
          </div>
        </div>
      </div>
      
    </>
  );
};

export default FrontPage;
