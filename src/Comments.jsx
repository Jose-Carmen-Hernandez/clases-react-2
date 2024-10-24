//ejemplo comun de fetch:
/* import { useEffect, useState } from "react";

const Comments = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const getComments = fetch("https://jsonplaceholder.org/comments");
    getComments.then((res) => res.json()).then((res) => setComments(res));
  }, []);
  console.log(comments);

  return <div>Comments</div>;
}; */

//EJEMPLO DE FETCH CON CUSTOM HOOK 'useFetch':
import useFetch from "./utils/customHooks/useFetch";

const Comments = () => {
  //data recibe el "alias" de "commentsjson"
  const { data: commentsjson, loading } = useFetch(
    "http://jsonplaceholder.org/comments"
  );

  console.log("comments", commentsjson); //data ahora se llama "commentsjson"
  console.log("loading", loading);

  return <div>Comments</div>;
};
export default Comments;
