//import { FaOpencart } from "react-icons/fa";
import "./cartWidget.css";
import ShoppingCartTwoToneIcon from "@mui/icons-material/ShoppingCartTwoTone";
const CartWidget = ({ darkMode }) => {
  return (
    <div className="cart">
      <span className={darkMode ? "span-dark" : "span"}>0</span>
      <ShoppingCartTwoToneIcon
        fontSize="large"
        className={darkMode ? "icon-dark" : "icon"}
      />
    </div>
  );
};

export default CartWidget;
