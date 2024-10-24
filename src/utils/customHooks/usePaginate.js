
//nuestro array se cortara de 10 en 10 para efectos practicos.
//la cantidad de paginas debe ser dinamica porque no siempre sabemos la longitud del array
//el corte "desde" se realiza considerando la pagina actual -1.

import { useState } from "react";

//el corte "hasta" se realiza considerando la pagina actual multiplicada por 10
const usePaginate = (array) => {

  const [currentPage, setCurrentPage] = useState(1);
  let totalPages = Math.ceil(array.length / 10);

  const arrayCortado = array.slice((10 * (currentPage - 1)), (10 * currentPage));
  //funciones para avanzar y retroceder de pagina;
  const nextPage = () => {
    if (currentPage < totalPages) {

      setCurrentPage(currentPage + 1);
    }
  }
  const prevPage = () => {
    if (currentPage > 1) {

      setCurrentPage(currentPage - 1);
    }
  }

  return { arrayCortado, currentPage, nextPage, prevPage };

}

export default usePaginate

//Math.floor(2.7)//-->2 (inmediato inferior)
//Math.round(2.8)//-->3 (sube al numero superior)
//Math.round(2.3)//-->2 (baja al numero inferior)
//Math.ceil(2.1)//-->3 (siempre sube al numero superior aunque el decimal sea 1)
//array.slice() sirve para cortar. Devuelve un array y necesita 2 parametros (desde donde y hasta donde). El "desde donde" si se incluye en el corte, el "hasta donde" no se incluye en el corte.
//[a,b,c,d,e,f,].slice(0,10) //devuelve un array de 10 elementos (empezando en el 0 y llegando hasta el 9).
//[a,b,c,d,e,f,].slice(10,20)//corta del 10 al 19 = 10 elementos... etc.