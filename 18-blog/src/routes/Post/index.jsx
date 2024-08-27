import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import blogFetch from "../../axios/config";

import "./styles.css";

const Post = () => {
  const [post, setPost] = useState({});

  const { id } = useParams();

  async function getPost() {
    try {
      const res = await blogFetch.get(`/posts/${id}`);
      const data = res.data;

      setPost(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getPost();
  }, []);

  return (
    <div className="post-container">
      {!post.title ? (
        <p>Carregando...</p>
      ) : (
        <div className="post">
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      )}
    </div>
  );
};

export default Post;
