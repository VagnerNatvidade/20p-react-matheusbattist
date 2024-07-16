import React, { useState, useEffect } from "react";
import axios from "axios";

import { SearchBar } from "./components/SearchBar";
import { PhotoList } from "./components/PhotoList";
import { EnlargedPhoto } from "./components/EnlargedPhoto";

export function App() {
  const [photos, setPhotos] = useState([]);
  const [query, setQuery] = useState(""); // user search
  const [category, setCategory] = useState("");
  const [enlargedPhoto, setEnlargedPhoto] = useState(null);
  const [activateSearch, setActivateSearch] = useState(false);

  // API config with axios
  async function fetchData({ query, category }) {
    const apiKey = import.meta.env.VITE_UNSPLASH_API_KEY;

    if (query || category) {
      let searchQuery = query;

      if (query && category) {
        searchQuery = `${query} ${category}`;
      } else if (category) {
        searchQuery = category;
      }

      try {
        // request - BASE_URL, api config
        const res = await axios.get(`https://api.unsplash.com/search/photos`, {
          params: {
            query: searchQuery,
            client_id: apiKey,
          },
        });

        setPhotos(res.data.results);
      } catch (error) {
        console.log("Erro ao buscar fotos!", error);
      }

      return;
    }

    try {
      // request - BASE_URL, api config
      const res = await axios.get(`https://api.unsplash.com/photos/random`, {
        params: {
          client_id: apiKey,
          count: 10, // num of rendered photos
        },
      });

      setPhotos(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData(query, category);
  }, []);

  useEffect(() => {
    if (activateSearch) {
      fetchData({ query, category });
      setActivateSearch(false);
    }
  }, [activateSearch]);

  return (
    <div className="container">
      <SearchBar
        setQuery={setQuery}
        setCategory={setCategory}
        setActivateSearch={setActivateSearch}
      />
      <PhotoList photos={photos} setEnlargedPhoto={setEnlargedPhoto} />
      {enlargedPhoto && (
        <EnlargedPhoto
          photo={enlargedPhoto}
          setEnlargedPhoto={setEnlargedPhoto}
        />
      )}
    </div>
  );
}
