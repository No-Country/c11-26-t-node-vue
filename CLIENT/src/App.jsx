import "./App.less";
import Footer from "./Components/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";
import LoginForm from "./Components/LoginForm/LoginForm";
import NavBarRegistro from "./Components/NavBarRegistro/NavBarRegistro";
import ItemListConteiner from "./Components/ItemListConteiner/ItemListConteiner";
import ItemDetailConteiner from "./Components/ItemDetailConteiner/ItemDetailConteines";
import Home from "./Components/Home/Home";


function App() {
  return (
    <BrowserRouter>
     <ScrollToTop />
      <Routes>
        <Route path="/" element={<NavBarRegistro />} />
        <Route path="/registro" element={<LoginForm />} />
        <Route path="/categoria" element={<ItemListConteiner />} />
        <Route path="/:idCategoria" element={<ItemListConteiner />} />
        <Route path="/item/:idItem" element={<ItemDetailConteiner />} />
        <Route path="/home" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
