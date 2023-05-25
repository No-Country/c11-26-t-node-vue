import "./App.less";
import Footer from "./Components/Footer/Footer";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import LoginForm from "./Components/LoginForm/LoginForm";
import NavBarRegistro from "./Components/NavBarRegistro/NavBarRegistro";


function App() {
  return (
    <BrowserRouter>
      <NavBarRegistro />
      
      <Routes>
         <Route path={"/login"} element={ <LoginForm /> } />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
