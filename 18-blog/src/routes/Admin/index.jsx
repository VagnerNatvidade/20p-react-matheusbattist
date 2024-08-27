import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import blogFetch from "../../axios/config";

import "./styles.css";

const Admin = () => {
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

  async function deletePost(id) {
    await blogFetch.delete(`/post/${id}`);

    const filteredPosts = posts.filter((post) => post.id !== id);

    setPosts(filteredPosts);
  }

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="admin">
      <h1>Gerenciar Posts</h1>
      {posts.length === 0 ? (
        <p>Carregando...</p>
      ) : (
        posts.map((post) => (
          <div className="post" key={post.id}>
            <h2>{post.title}</h2>
            <div className="actions">
              <Link className="btn edit-btn" to={`/posts/edit/${post.id}`}>
                Editar
              </Link>
              <button className="btn delete-btn" onClick={() => deletePost(id)}>
                Excluir
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Admin;
