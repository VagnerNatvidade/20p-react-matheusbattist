import { useState, useEffect } from "react";
import axios from "axios";

function InfinityScroll() {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMoreData, setHasMoreData] = useState(true);

  async function fetchPosts() {
    if (isLoading) return;

    setIsLoading(true);

    try {
      const res = await axios.get(
        `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`
      );

      if (res.data.length > 0) {
        setPosts((prevPosts) => [...prevPosts, ...res.data]);
      } else {
        setHasMoreData(false);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  function handleScroll() {
    if (
      window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 100 &&
      !isLoading &&
      hasMoreData
    ) {
      setPage((prevPage) => prevPage + 1);
    }
  }

  useEffect(() => {
    const throttleHandleScroll = throttle(handleScroll, 150);
    window.addEventListener("scroll", throttleHandleScroll);

    return () => {
      window.removeEventListener("scroll", throttleHandleScroll);
    };
  }, [hasMoreData, isLoading]);

  useEffect(() => {
    fetchPosts();
  }, [page]);

  return (
    <div>
      <h1>InfinityScroll</h1>
      <ul>
        {posts.map((post) => (
          <li key={Math.random() * 1000}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
      {isLoading && <p>Carregando mais dados...</p>}
    </div>
  );
}

function throttle(func, delay) {
  let lastCall = 0;

  return function (...args) {
    const now = new Date().getTime();
    if (now - lastCall < delay) return;
    lastCall = now;
    return func(...args);
  };
}

export default InfinityScroll;
