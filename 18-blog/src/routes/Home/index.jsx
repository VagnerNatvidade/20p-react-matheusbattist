import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import blogFetch from "../../axios/config";

import "./styles.css";

const Home = () => {
  const [posts, setPosts] = useState([]);

  async function getPosts() {
    try {
      const res = await blogFetch.get("/posts");
      const data = res.data;

      setPosts(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div>
      <h1>Últimos posts</h1>
      {posts.length === 0
        ? "Carregando..."
        : posts.map((post) => (
            <div className="post" key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
              <Link to={`/posts/${post.id} `} className="btn">
                Ler mais
              </Link>
            </div>
          ))}
    </div>
  );
};

export default Home;
