import "./App.less";
import Footer from "./Components/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginForm from "./Components/LoginForm/LoginForm";
import NavBarRegistro from "./Components/NavBarRegistro/NavBarRegistro";
import ItemListConteiner from "./Components/ItemListConteiner/ItemListConteiner";
import ItemDetailConteiner from "./Components/ItemDetailConteiner/ItemDetailConteines";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavBarRegistro />} />
        <Route path="/registro" element={<LoginForm />} />
        <Route path="/categoria" element={<ItemListConteiner />} />
        <Route path="/:idCategoria" element={<ItemListConteiner />} />
        <Route path="/item/:idItem" element={<ItemDetailConteiner />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
