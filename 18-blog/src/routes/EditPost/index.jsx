import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import blogFetch from "../../axios/config";

const EditPost = () => {
  const [title, setTitle] = useState();
  const [body, setBody] = useState();

  const { id } = useParams();

  async function getPost() {
    try {
      const res = await blogFetch.get(`/posts/${id}`);
      const data = res.data;

      setTitle(data.title);
      setBody(data.body);
    } catch (error) {
      console.log(error);
    }
  }

  async function editPost(e) {
    e.preventDefault();

    const post = { title, body, userId: 1 };

    await blogFetch.put(`/posts/${id}`, {
      body: post,
    });
  }

  useEffect(() => {
    getPost();
  }, []);

  return (
    <div className="new-post">
      <h2>Editando: {title}</h2>
      <form onSubmit={(e) => editPost(e)}>
        <div className="form-control">
          <label htmlFor="title">Título:</label>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Digite o título..."
            onChange={(e) => setTitle(e.target.value)}
            value={title || ""}
          />
        </div>
        <div className="form-control">
          <label htmlFor="body">Conteúdo:</label>
          <textarea
            name="body"
            id="body"
            placeholder="Digite o conteúdo..."
            onChange={(e) => setBody(e.target.value)}
            value={body || ""}
          ></textarea>
        </div>
        <input type="submit" value="Editar post" className="btn" />
      </form>
    </div>
  );
};

export default EditPost;
