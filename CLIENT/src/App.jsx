import './App.less'

function App() {
  return (
    <>
    <section className="header">
      <div className="navbar">
        <img src="/logo.png" alt="" />
        <ul>
          <li><a href="">Inicio</a></li>
          <li><a href="">Nosotros</a></li>
          <li><a href="">Registrarse</a></li>
          <li><button>Iniciar de sesión</button></li>
        </ul>
      </div>
      <div className='frontpage'>
        <div className='text'>
          <h1>
            <span className='pink'>Descubre </span>
            <span className='yellow'>el ritmo </span>
            <span className='l-blue'>que mueve </span>
            <span className='white'>tu alma</span>
          </h1>
          <p>Encuentra tus artistas favoritos, géneros apasionantes y álbumes icónicos. ¡Empieza a disfrutar de la música que amas hoy mismo!</p>
          <button>Explorar ahora</button>
        </div>
        <div className='logo'>
          <img src="/logo.png" alt="" />
        </div>
      </div>
    </section>
    <br />
    <section className="discography">
      <h1>Discography</h1>
    </section>
    <br />
    <section className="footer">
      <h1>Footer</h1>
    </section>
    </>
  )
}

export default App
