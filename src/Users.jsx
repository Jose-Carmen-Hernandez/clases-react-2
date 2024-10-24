//ejemplo de fetch comun"
/* import { useEffect, useState } from "react";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = fetch("https://jsonplaceholder.org/users");
    //la respuesta del fetch no viene lista, por eso es necesario convertirla en json:
    getUsers.then((res) => res.json()).then((res) => setUsers(res));
  }, []);
  console.log(users);

  return <div>Users</div>;
}; */

import useFetch from "./utils/customHooks/useFetch";

//ejemplo de fetch con customHook 'useFetch':

const Users = () => {
  const { data, loading, error } = useFetch(
    /* const { data:usersjson, loading, error } = useFetch( */ //data puede recibir un alias
    "https://jsonplaceholder.org/users"
  );

  console.log("users", data);
  /* console.log("users", usersjson);*/ //si usamos el alias, data se llamaria "usersjson"
  return <div>Users</div>;
};

export default Users;
