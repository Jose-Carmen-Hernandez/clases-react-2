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
    </div>
  );
}

export default Item;
