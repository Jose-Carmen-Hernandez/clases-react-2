import Item from "../item/Item";

//El primer elemento que se retorna en un map debe llevar la propiedad "key"0
const ItemList = ({ items, darkMode }) => {
  return items.map((item) => (
    <Item key={item.id} item={item} darkMode={darkMode} />
  ));
};

export default ItemList;
