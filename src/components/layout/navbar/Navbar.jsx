import CartWidget from "../../common/cartWidget/CartWidget";
import "./navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="logo-container">
          <img
            className="logo"
            src="https://res.cloudinary.com/dkkwppueg/image/upload/v1728355319/alef-logo_cxrxbg.jpg"
            alt="alef electronics logotipo"
          />
          <h1>Computers&more!</h1>
        </div>
        <ul className="categories">
          <li>
            <a href="">Inicio</a>
          </li>
          <li>
            <a href="">Computadoras</a>
          </li>
          <li>
            <a href="">Celulares</a>
          </li>
          <li>
            <a href="">Accesorios</a>
          </li>
          <li>
            <a href="">Monitores</a>
          </li>
          <CartWidget />
        </ul>
      </div>
    </>
  );
};
export default Navbar;
