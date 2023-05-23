import Footer from "../Footer/Footer";
import "./Home.less";

function Home() {
  return (
    <> <div className="home">
      <section className="navbar">
        <div className="left-navbar">
          <img src="" alt="" />
          <ul>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <div className="right-navbar">
          <input type="text" />
          <a href=""></a>
          <a href=""></a>
        </div>
      </section>
      <section className="iconic">
        <img src="" alt="" />
        <h2></h2>
        <section className="iconic-albums">
        {/* Aca van los álbumes iconicos! */}
        </section>
      </section>
      <section className="catalog">
        {/* Nose si hacer un nuevo estilo para el catalogo en tema de css, despues veo, pero esto ya lo hizo diego! */}
      </section>
      <section className="artists">
        {/* Esto va a ser un embole, el infierno de flexbox, es sufrir esto nomas en tema de diseño, ya vere como le hago! */}
      </section>
      <Footer/>
    </div> </>
  )
}

export default Home