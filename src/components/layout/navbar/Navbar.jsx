import CartWidget from "../../common/cartWidget/CartWidget";
import "./navbar.css";
import CabinTwoToneIcon from "@mui/icons-material/CabinTwoTone";
import LaptopChromebookTwoToneIcon from "@mui/icons-material/LaptopChromebookTwoTone";
import HeadsetMicTwoToneIcon from "@mui/icons-material/HeadsetMicTwoTone";
import DesktopMacTwoToneIcon from "@mui/icons-material/DesktopMacTwoTone";
import PhoneIphoneTwoToneIcon from "@mui/icons-material/PhoneIphoneTwoTone";

//Navbar recibe la prop "darkMode"

const Navbar = ({ darkMode }) => {
  //console.log("Navbar", darkMode);

  return (
    <>
      <div className={darkMode ? "navbar navbar-dark" : "navbar"}>
        <div className="logo-container">
          <img
            className={darkMode ? "dark-logo" : "logo"}
            src="https://res.cloudinary.com/dkkwppueg/image/upload/v1729367221/OIP.YP_QZPiEyHrjr9ciW-du2gAAAA_fscev3.jpg"
            alt="alef electronics logotipo"
          />
          <h1 className={darkMode ? "dark-title" : "light-title"}>
            Electronics&more
          </h1>
        </div>
        <ul className="categories">
          <li>
            <a className={darkMode ? "li li-dark" : "li"} href="">
              <CabinTwoToneIcon />
              Inicio
            </a>
          </li>
          <li>
            <a className={darkMode ? "li li-dark" : "li"} href="">
              <LaptopChromebookTwoToneIcon />
              Computadoras
            </a>
          </li>
          <li>
            <a className={darkMode ? "li li-dark" : "li"} href="">
              <PhoneIphoneTwoToneIcon />
              Celulares
            </a>
          </li>

          <li>
            <a className={darkMode ? "li li-dark" : "li"} href="">
              <HeadsetMicTwoToneIcon />
              Accesorios
            </a>
          </li>
          <li>
            <a className={darkMode ? "li li-dark" : "li"} href="">
              <DesktopMacTwoToneIcon />
              Monitores
            </a>
          </li>
          <a href="">
            <CartWidget darkMode={darkMode} />
          </a>
        </ul>
      </div>
    </>
  );
};
export default Navbar;
