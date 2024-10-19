//http request method: GET, POST, PUT, DELETE
//el metodo indica para que nos estamos conectando a la API (GET es el metodo por defecto en un fetch).
//La informacion que vamos a enviar a taves de POST o PUT se debe agregar en el "body"
//En los headers se envia informacion de configuracion (tipo de dato, etc)

import { useEffect, useState } from "react";
import "./fetchingData.css";

//Cuando hacemos un fetching de datos automaticamente se devuelve una promesa.
//1-Obtenemos todos los usuarios de jsonplaceholder (en el endpoint general):
const FetchingData = () => {
  const [arrayUsuarios, setArrayUsuarios] = useState([]);
  useEffect(() => {
    const getUsers = fetch("https://jsonplaceholder.org/users");
    getUsers
      .then((res) => res.json()) //parsear la respuesta a formato json
      .then((usuarios) => {
        setArrayUsuarios(usuarios);
      }) //cuando usamos fetch se necesita un doble then para acceder al resultado de la promesa
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log(arrayUsuarios);

  //2-Obtenemos  un solo usuario usando params en el endpoint particular:
  //aqui no usamos useState porque solo estamos mostrando el resultado en la consola.
  useEffect(() => {
    const getUser = fetch("https://jsonplaceholder.org/users/11"); //usuario id:11
    getUser
      .then((res) => res.json())
      .then((user) => {
        console.log(user);
      });
  }, []);

  //Para crear un usuario se requieren inputs. Pero en este ejercicio lo haremos harcodeado (estatico):
  const createUser = () => {
    let user = {
      firstname: "Pepe",
      lastname: "Johnson",
      email: "bobjohnson@example.com",
      birthDate: "1974-11-12",
      login: {
        uuid: "3a0eed11-9430-4d68-901f-c0d4c1c3bf12",
        username: "bobjohnson",
        password: "jsonplaceholder.org",
        md5: "c1328472c5794a25723600f71c1b4586",
        sha1: "35544a31cc19bd6520af116554873167117f4d94",
        registered: "2022-06-10T12:45:20.022Z",
      },
      address: {
        street: "789 Elm Street",
        suite: "Apt. 100",
        city: "Anytown",
        zipcode: "12345-6789",
        geo: {
          lat: "42.5678",
          lng: "-71.1234",
        },
      },
      phone: "(555) 555-9012",
      website: "www.bobjohnson.com",
      company: {
        name: "Acme Corporation",
        catchPhrase: "Your trusted partner",
        bs: "Manufacturing",
      },
    };
    console.log(user); //al tocar el boton "crear usuario" se muestra el resultado en la consola. No estamos creando y agregando el objeto nuevo a la API, es una simulacion.
    fetch("https://jsonplaceholder.org/users", {
      method: "POST",
      body: JSON.stringify(user), //"{firstname: "pepe"...}"
    });
  }; //el resultado de los fetch se debe consultar en la seccion "Network" de la consola.

  //DELETE no usa body
  const deleteUser = () => {
    fetch("https://jsonplaceholder.org/users/2", {
      method: "DELETE",
    });
    console.log("usuario eliminado");
  }; //estos son solo ejemplos simples.

  //UPDATE USER (necesita und endpoint especifico y un body)
  const updateUser = () => {
    let user = {
      firstname: "Pepe",
      lastname: "Johnson",
      email: "bobjohnson@example.com",
      birthDate: "1974-11-12",
      login: {
        uuid: "3a0eed11-9430-4d68-901f-c0d4c1c3bf12",
        username: "bobjohnson",
        password: "jsonplaceholder.org",
        md5: "c1328472c5794a25723600f71c1b4586",
        sha1: "35544a31cc19bd6520af116554873167117f4d94",
        registered: "2022-06-10T12:45:20.022Z",
      },
      address: {
        street: "789 Elm Street",
        suite: "Apt. 100",
        city: "Anytown",
        zipcode: "12345-6789",
        geo: {
          lat: "42.5678",
          lng: "-71.1234",
        },
      },
      phone: "(555) 555-9012",
      website: "www.bobjohnson.com",
      company: {
        name: "Acme Corporation",
        catchPhrase: "Your trusted partner",
        bs: "Manufacturing",
      },
    };
    fetch("https://jsonplaceholder.org/users/2", {
      method: "PUT",
      body: JSON.stringify(user),
    });
    console.log("usuario actualizado");
  };

  return (
    <div className="users">
      <h1>Botones de simulacion y lista de usuarios jsonplaceholder</h1>
      <button onClick={createUser}>Crear usuario</button>
      <button onClick={deleteUser}>Eliminar usuario</button>
      <button onClick={updateUser}>Actualizar usuario</button>
      {arrayUsuarios.map((usuario) => {
        return (
          <div key={usuario.id} className="usuarios">
            <h2>
              {usuario.id}-{usuario.firstname} {usuario.lastname}
            </h2>
          </div>
        );
      })}
    </div>
  );
};

export default FetchingData;
