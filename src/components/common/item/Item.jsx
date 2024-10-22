//Item es la Card del producto

import "./item.css";

function Item({ item, darkMode }) {
  return (
    <div className={darkMode ? " card card-dark" : "card card-light"}>
      <h2 className="info title">{item.title}</h2>
      <img src={item.imageUrl} alt={item.title} className="card-image" />
      <p className="info">Precio: ${item.price.toFixed(2)}</p>
      <p className="info">
        <b>Disponibles:</b>{" "}
        {item.stock ? (
          <span>{item.stock} unidades.</span>
        ) : (
          <span className="agotado">&quot;Producto agotado&quot;</span>
        )}
      </p>
      <button className="detail-button">
        <a href="">Ver detalle</a>
      </button>
    </div>
  );
}

export default Item;
