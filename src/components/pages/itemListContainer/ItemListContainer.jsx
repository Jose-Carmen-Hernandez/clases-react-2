import Card from "../../common/card/Card";
import "./itemListContainer.css";

const ItemListContainer = ({ greeting }) => {
  return (
    <>
      <h1 className="greeting">{greeting}</h1>
      <div className="list-container">
        <Card
          title="computadora"
          price={15000}
          stock={10}
          img="https://res.cloudinary.com/dkkwppueg/image/upload/v1728355319/alef-logo_cxrxbg.jpg"
          alt=""
        />
        <Card
          title="Celular Motorola"
          price={5000}
          stock={4}
          img="https://res.cloudinary.com/dkkwppueg/image/upload/v1728342012/samples/cloudinary-icon.png"
        />
        <Card title="Monitor Samsung" price={4500} stock={5} />
      </div>
    </>
  );
};

export default ItemListContainer;
