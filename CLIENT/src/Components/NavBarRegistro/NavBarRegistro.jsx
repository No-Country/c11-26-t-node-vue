import "../../App.less";
import FrontPage from "../FrontPage/FrontPage";
import Catalogo from "../Catalogo/Catalogo";
import NavMusic from "../NavMusic/NavMusic";

const NavBarRegistro = () => {
  return (
    <>
      <section className="header">
        <NavMusic />
        <FrontPage />
      </section>
      <Catalogo />
    </>
  );
};

export default NavBarRegistro;
