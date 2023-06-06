import Artists from "../Artists/Artists";

const ContenedorArtista = () => {
  return (
    <div className="conteArt">
      <div className="conte">
        <div className="navDetail3">
          <ul className="ulDetail">
            <Link to="/home" className="liDetail3">
              INICIO/
            </Link>
          </ul>
        </div>

        <img
          className="trayectoriaDeOnda1"
          src={"../assets/imgtrayectoriadeformadeonda.svg"}
          alt="Trayectoria de Onda"
        />
        <h2 className="h2Catalogo1">catálogo</h2>

        <div className="searchbar">
          <input
            className="inputSerch"
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Buscar..."
          />
          <button className="btnLupa" onClick={handleSearch}>
            <RxMagnifyingGlass />
          </button>
        </div>
      </div>
      <Route path="/artists" element={<ArtistaListConteiner />} />
      <Route path="/:idCategori" element={<ArtistaListConteiner />} />
      <Route path="/items/:idItems" element={<ArtistaDetailContainer />} />
    </div>
  );
};

export default ContenedorArtista;
