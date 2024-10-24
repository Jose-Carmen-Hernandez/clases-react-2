import { useState } from "react";
import Navbar from "./components/layout/navbar/Navbar.jsx";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer.jsx";
import { FormControlLabel } from "@mui/material";
import { Switch } from "@mui/material";
import Item from "./components/common/item/Item.jsx";
import ItemDetailContainer from "./components/pages/itemDetail/ItemDetailContainer.jsx";
import Users from "./Users.jsx";
import Posts from "./Posts.jsx";
import Comments from "./Comments.jsx";
//import CartContainer from "./components/pages/cart/CartContainer.jsx";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const cambiarModo = () => {
    setDarkMode(!darkMode);
  };

  return (
    <>
      <Navbar darkMode={darkMode} />

      <div className={darkMode ? "dark-mode-button" : "mode-button"}>
        <FormControlLabel
          control={<Switch checked={darkMode} onChange={cambiarModo} />}
          label="Cambiar modo"
          className={darkMode ? "dark-style" : "light-style"}
        />
      </div>
      {/*  <ItemListContainer darkMode={darkMode} /> 
      {/*  <ItemDetailContainer darkMode={darkMode} /> */}
      {/* <Users /> */}
      <Posts />
      {/* <Comments /> */}
    </>
  );
}

export default App;
