/* const Counter = () => {
  
  let contador = 0;
  const sumar = () => {
    console.log("se ejecuta la funcion sumar");
    contador ++;
  };

  return (
    <>
      <h1>Contador: {contador}</h1>
      <button onClick={sumar}>sumar</button>
    </>
  );
};
*/
/* Hasta aqui, no podemos ver el cambio de valor del contador en el DOM
En React, para actualizar el cambio del valor de un contador necesita el uso de hooks */

/* Ejemplo con el hook useState */
import { useState } from "react"; //Primero se importa la funcion useState
const Counter = () => {
  const [contador, setContador] = useState(0);
  //ejemplo de cambio a modo oscuro sin funcionalidad
  const [isDark, setIsDark] = useState(false);

  const sumar = () => {
    setContador(contador + 1); //va a sumar de 1 en 1 y se va a mostrar en el navegador (DOM)
  };

  const restar = () => {
    setContador(contador - 1);
  };
  const cambiarModo = () => {
    setIsDark(!isDark); //no esta definida la funcionalidad para el cambio real de modo.
  };
  console.log(isDark); //cambia de estado de false a true en cada click

  return (
    <>
      <h1>Cambios de estado *useState*</h1>
      <h2>Contador: {contador}</h2>
      <button onClick={sumar}>sumar</button>
      <button onClick={restar}>restar</button>
      <button onClick={cambiarModo}>Cambiar Modo en consola</button>
    </>
  );
};
export default Counter;
