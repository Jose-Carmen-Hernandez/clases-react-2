import Card from "../../common/card/Card";
import "./itemListContainer.css";

const ItemListContainer = ({ darkMode }) => {
  console.log("ItemListContainer", darkMode);

  return (
    <>
      <div
        className={
          darkMode ? "list-container list-container-dark" : "list-container"
        }
      >
        <Card
          title="computadora"
          price={15000}
          stock={10}
          img="https://res.cloudinary.com/dkkwppueg/image/upload/v1728342012/samples/cloudinary-icon.png"
          alt="product image"
          darkMode={darkMode}
        />
        <Card
          title="Celular Motorola"
          price={5000}
          stock={4}
          img="https://res.cloudinary.com/dkkwppueg/image/upload/v1728342012/samples/cloudinary-icon.png"
          alt="product image"
          darkMode={darkMode}
        />
        <Card
          title="Monitor Samsung"
          price={5000}
          stock={4}
          img="https://res.cloudinary.com/dkkwppueg/image/upload/v1728342012/samples/cloudinary-icon.png"
          alt="product image"
          darkMode={darkMode}
        />
        <Card
          title="Laptop Lenovo"
          price={8000}
          stock={8}
          img="https://res.cloudinary.com/dkkwppueg/image/upload/v1728342012/samples/cloudinary-icon.png"
          alt="product image"
          darkMode={darkMode}
        />
        <Card
          title="Laptop HP"
          price={7000}
          stock={8}
          img="https://res.cloudinary.com/dkkwppueg/image/upload/v1728342012/samples/cloudinary-icon.png"
          alt="product image"
          darkMode={darkMode}
        />
        <Card
          title="Desktop Apple"
          price={15000}
          stock={5}
          img="https://res.cloudinary.com/dkkwppueg/image/upload/v1728342012/samples/cloudinary-icon.png"
          alt="product image"
          darkMode={darkMode}
        />
      </div>
    </>
  );
};

export default ItemListContainer;
