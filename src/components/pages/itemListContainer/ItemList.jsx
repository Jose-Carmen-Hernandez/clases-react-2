//ItemList es el componente contenedor de las Cards

import Item from "../../common/item/Item";

//El primer elemento que se retorna en un map debe llevar la propiedad "key"0
const ItemList = ({ items, darkMode }) => {
  return items.map((item) => (
    <Item key={item.id} item={item} darkMode={darkMode} />
  ));
};

export default ItemList;
