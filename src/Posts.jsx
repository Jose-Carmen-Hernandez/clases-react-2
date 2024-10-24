//ejemplo de fetch comun:
/* 
import { useEffect, useState } from "react";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = fetch("https://jsonplaceholder.org/posts");
    getPosts.then((res) => res.json()).then((res) => setPosts(res));
  }, []);
  console.log(posts);

  return <div>Posts</div>;
}; */

//ejemplo de fetch con customHook 'useFetch':
/*import useFetch from "./utils/customHooks/useFetch";

 const Posts = () => {
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.org/posts"
  );
  console.log("posts", data);
  //console.log("loading", loading);
  //console.log("error", error);

  return <div>Posts</div>;
};
 */

//ejemplo de fetching usando los customHooks "useFetch" y "usePaginate" para hacer un paginado del resultado del fetching de datos.
import useFetch from "./utils/customHooks/useFetch";
import usePaginate from "./utils/customHooks/usePaginate";

const Posts = () => {
  const { data: posts } = useFetch("https://jsonplaceholder.org/posts");
  console.log("posts", posts);
  const { arrayCortado, currentPage, prevPage, nextPage } = usePaginate(posts);

  return (
    <div>
      {/* mapeamos el arrayCortado y no el array de posts */}
      {arrayCortado.map((post) => {
        return (
          <div key={post.id}>
            <h2>{post.slug}</h2>
            {/* slug es una propiedad de los posts parecida a title */}
          </div>
        );
      })}

      <button onClick={prevPage}>Pagina nterior</button>
      <h3>Pagina actual: {currentPage}</h3>
      <button onClick={nextPage}>Pagina siguiente</button>
    </div>
  );
};
export default Posts;
//necesitamos cortar el array para no mostrar todo el contenido en una sola vista.
