import "./App.less";
import Footer from "./Components/Footer/Footer";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import LoginForm from "./Components/LoginForm/LoginForm";
import NavBarRegistro from "./Components/NavBarRegistro/NavBarRegistro";
import Catalogo from "./Components/Catalogo/Catalogo";

function App() {
  return (
    <BrowserRouter>
      
      <div className="contenedorCard">
       
        <Routes>
          <Route path="/" element={ <NavBarRegistro /> } />
          <Route path="/login" element={<LoginForm />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
