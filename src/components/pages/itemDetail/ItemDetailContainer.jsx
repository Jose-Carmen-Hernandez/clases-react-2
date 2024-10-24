import ItemDetail from "./ItemDetail";
import products from "../../../products";
import { useEffect, useState } from "react";

const ItemDetailContainer = ({ darkMode }) => {
  let id = "1"; //id harcodeado
  const [item, setItem] = useState({});

  useEffect(() => {
    //buscar el producto por id en el array de productos:
    let productSelected = products.find((product) => product.id === id);
    console.log(productSelected);

    setItem(productSelected);
  }, [id]);

  return <ItemDetail darkMode={darkMode} item={item} />;
};

export default ItemDetailContainer;
