//un customHok no es un componente porque no retorna jsx
//tampoco es una funcion pura de JS porque dentro se pueden usar cosas de React
//Si es un customHook (es una funcion de js que dentro contiene nomenclatura de React.js gracias al prefijo "use")
//Si una funcion no necesita utilizar contenido de React, se puede crear como una funcion helper de js sin necesidad de ser un customHook 
import { useEffect, useState } from "react";


const useFetch = (endpoint) => { //endpoint puese sustituirse por un parametro diferente en cada sitio donde se utilice el customHook
  //aqui puedo usar react
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({})

  useEffect(() => {
    setLoading(true);

    const getData = fetch(endpoint);
    getData.then(response => response.json())
      .then(res => setData(res))
      .catch((error) => setError(error))
      .finally(() => setLoading(false))


  }, [endpoint])

  return { data, loading, error }//{data:data, loading:loading, error:error}
}

export default useFetch

//Lo que devuelve este hook:
//useFetch() --> datos (users) {}.users
//useFetch() --> datos (posts) {}.posts
//useFetch() --> datos (comments) {}.comments