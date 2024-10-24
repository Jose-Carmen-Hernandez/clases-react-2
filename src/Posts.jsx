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

import useFetch from "./utils/customHooks/useFetch";

//ejemplo de fetch con customHook 'useFetch':

const Posts = () => {
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.org/posts"
  );
  console.log("posts", data);
  //console.log("loading", loading);
  //console.log("error", error);

  return <div>Posts</div>;
};

export default Posts;
