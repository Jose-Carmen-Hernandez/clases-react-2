import "./itemListContainer.css";
import products from "../../../products.js";
import { useEffect, useState } from "react";
import ItemList from "../../common/itemList/ItemList.jsx";

const ItemListContainer = ({ darkMode }) => {
  //myProducts inicia como un array vacio:
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getProducts = new Promise((res, rej) => {
      res(products);
    });
    getProducts.then((data) => {
      setItems(data);
    });
  }, []); //la promesa se resuelve una sola vez debido al array de dependencias vacio

  return (
    <>
      <h2 className={darkMode ? "offer offer-dark" : "offer offer-light"}>
        ¡Toda la tienda con 20% de descuento + 18 msi con Master Card!
      </h2>

      <div
        className={
          darkMode ? "list-container list-container-dark" : "list-container"
        }
      >
        <ItemList items={items} darkMode={darkMode} />
      </div>
    </>
  );
};

export default ItemListContainer;
