import { FaOpencart } from "react-icons/fa";
import "./cartWidget.css";

const CartWidget = () => {
  return (
    <div className="cart">
      <FaOpencart className="cart-icon" />
      <span>0</span>
    </div>
  );
};

export default CartWidget;
