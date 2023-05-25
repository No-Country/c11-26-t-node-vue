import "./App.less";
import Footer from "./Components/Footer/Footer";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import LoginForm from "./Components/LoginForm/LoginForm";
import NavBarRegistro from "./Components/NavBarRegistro/NavBarRegistro";
import Carrusel from "./Components/Carrusel/Carrusel";
import ItemDetailConteiner from "./Components/ItemDetailConteiner/ItemDetailConteines";
import ItemListConteiner from "./Components/ItemListConteiner/ItemListConteiner";

function App() {
  return (
    <BrowserRouter>
      <NavBarRegistro />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
