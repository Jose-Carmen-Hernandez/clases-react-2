import "./card.css";

/* const Card = (props) => {
  return (
    <div className="card">
      <h2>Nombre: {props.title}</h2>
      <h3>Precio: ${props.price}</h3>
      <h3>Disponibles: {props.stock}</h3>
      <img src={props.img} alt="" />
    </div>
  );
}; */

/* Ejemplo con el objeto props desestructurado: (es mas recomendable)*/
/* const Card = (props) => {
  const { title, price, stock, img } = props;
  return (
    <div className="card">
      <h2>Nombre: {title}</h2>
      <h3>Precio: ${price}</h3>
      <h3>Disponibles: {stock}</h3>
      <img src={img} alt="imagen de producto" />
    </div>
  );
}; */

/* La mejor forma es la siguiente: */
const Card = ({ title, price, stock, img, darkMode }) => {
  return (
    <div className={darkMode ? " card card-dark" : "card card-light"}>
      <h2>Nombre: {title}</h2>
      <h3>Precio: ${price}</h3>
      <h3>Disponibles: {stock}</h3>
      <img src={img} alt="imagen de producto" />
    </div>
  );
};

export default Card;
