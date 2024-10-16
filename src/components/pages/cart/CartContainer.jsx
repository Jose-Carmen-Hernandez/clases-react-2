import { useState, useEffect } from "react";

const CartContainer = () => {
  const [counter, setCounter] = useState(0);
  const [nombre, setNombre] = useState("pepe");
  const [prueba, setPrueba] = useState(false);

  const sumar = () => {
    setCounter(counter + 1);
  };

  const cambiarNombre = () => {
    setNombre(nombre === "pepe" ? "juan" : "pepe");
  };

  //ejecutar sumar y cambiar nombre con un solo boton:
  /* const cambiarTodo = () => {
    setCounter(counter + 1);
    setNombre(nombre === "pepe" ? "juan" : "pepe");
  }; */
  const cambiarPrueba = () => {
    setPrueba(!prueba);
  };

  console.log("No se ejecuta la tarea pesada");
  /*console.log(
    "Se solicitan datos a un servidor en La India cada vez que el componente se actualiza"
  ); */
  //useEffect evita que el componente se vuelva a cargar en cada actualizacion. Hace que se cargue solo una vez durante el montaje y no se repita mas la carga. Dentro del callback de useEffect debe incluirse todo lo que no queremos que se ejecute mas de una vez.
  useEffect(() => {
    console.log("Se ejecuta la tarea pesada dentro del useEffect");
  }, [
    nombre,
    prueba,
  ]); /* array de dependencias del useEffect. Aqui ponemos las variables que cuando cambien de estado, si se ejecute lo que hay dentro del useEffect. En este caso, cuando cambia el contador, no se ejecuta lo que hay dentro del useEffect, pero cuando cambia "nombre" o "prueba" entonces si se ejecuta lo que hay dentro del useEffect. Si no queremos que useEffect escuche cambios en ninguna de las variables, el array de dependencias swe deja vacio */

  return (
    <div>
      <h1>CartContainer</h1>
      <h2>{counter}</h2>
      <h2>{nombre}</h2>
      <button onClick={sumar}>sumar</button>
      <button onClick={cambiarNombre}>Cambiar nombre</button>
      {/*  <button onClick={cambiarTodo}>Cambiar Todo</button> */}
      <button onClick={cambiarPrueba}>Prueba</button>
    </div>
  );
};

export default CartContainer;
