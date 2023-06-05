import "./App.less";
import Footer from "./Components/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";
import LoginForm from "./Components/LoginForm/LoginForm";
import NavBarRegistro from "./Components/NavBarRegistro/NavBarRegistro";
import ItemListConteiner from "./Components/ItemListConteiner/ItemListConteiner";
import ItemDetailConteiner from "./Components/ItemDetailConteiner/ItemDetailConteines";
import Home from "./Components/Home/Home";
import InicioSesion from "./Components/InicioSesion/InicioSesion";
import Cart from "./Components/Cart/Cart";
import CatalogoCompleto from "./Components/CatalogoCompleto/CatalogoCompleto";
import Catalogo2 from "./Components/Catalogo2/Catalogo2";
import Catalogo3 from "./Components/Catalogo3/Catalogo3";
import Catalogo4 from "./Components/Catalogo4/Catalogo4";
import Catalogo5 from "./Components/Catalogo5/Catalogo5";
import ArtistaListConteiner from "./Components/ArtistaListConteiner/ArtistaListConteiner";


function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="*" element={<NavBarRegistro />} />
        <Route path="/registro" element={<LoginForm />} />
        <Route path="/categoria" element={<ItemListConteiner />} />
        <Route path="/:idCategoria" element={<ItemListConteiner />} />
        <Route path="/item/:idItem" element={<ItemDetailConteiner />} />
        <Route path="/home" element={<Home />} />
        <Route path="/iniciarsesion" element={<InicioSesion />} />
        <Route path="/album" element={ <CatalogoCompleto /> } />
        <Route path="/catalogo2" element={ <Catalogo2 /> } />
        <Route path="/catalogo3" element={ <Catalogo3 /> } />
        <Route path="/catalogo4" element={ <Catalogo4 /> } />
        <Route path="/catalogo5" element={ <Catalogo5 /> } />
        <Route path="/cart" element={<Cart />} />
        <Route path="/artists" element={ <ArtistaListConteiner />} />


      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
