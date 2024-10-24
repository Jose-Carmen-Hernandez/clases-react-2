# Clase 8:

-creamos 3 componentes para hacer fetching de datos a jsonplaceholder
-dentro de src creamos:
-Users.jsx
-Comments.jsx y
-Posts.jsx
Hicimos primero la peticion fetch() de la manera tradicional a los diferentes endpoints de la API pero eso significa repetir el mismo codigo en los tres componentes, por eso despues lo hicimos usando un customHook que es reutilizable y escalable.

Los customHooks siempre deben nombrarse con el prefijo "use" (useFetch, useConnect, useCualquiercosa...)
Los customHooks son archivos JS no son componentes JSX

-En la segunda parte de la clase hacemos un customHook para paginacion de un array de productos
-//Si una funcion no necesita utilizar contenido de React, se puede crear como una funcion helper de js sin necesidad de ser un customHook
-//Si una funcion necesita utilizar contenido de React, se debe crear como un customHook
