import { useState } from "react";
import Navbar from "./components/layout/navbar/Navbar.jsx";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer.jsx";
import { FormControlLabel } from "@mui/material";
import { Switch } from "@mui/material";
//import CartContainer from "./components/pages/cart/CartContainer.jsx";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const cambiarModo = () => {
    setDarkMode(!darkMode);
  };

  /* const [entraEnElDom, setEntraEnElDom] = useState(false);
  const montarOdesmontar = () => {
    setEntraEnElDom(!entraEnElDom);
  }; */

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
      <ItemListContainer darkMode={darkMode} />

      {/* ejemplo de montaje y desmontaje (no es una buena practica) */}
      {/* <button onClick={montarOdesmontar}>Montar y desmontar</button>

      {entraEnElDom ? <CartContainer /> : null} */}
    </>
  );
}

export default App;
