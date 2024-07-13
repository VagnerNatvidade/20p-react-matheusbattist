import { useState, useEffect } from "react";
import axios from "axios";

import SearchBar from "./components/searchbar";
import PhotoList from "./components/photo-list";
import EnlargedPhoto from "./components/enlarged-photo";

function App() {
  const [query, setQuery] = useState(""); // user search
  const [category, setCategory] = useState("");
  const [photos, setPhotos] = useState([]);
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

      // request - BASE_URL, api config
      const res = await axios.get("https://api.unsplash.com/search/photos", {
        params: {
          client_id: apiKey,
          query: searchQuery,
        },
      });

      setPhotos(res.data.results);
      return;
    }

    // request - BASE_URL, api config
    const res = await axios.get("https://api.unsplash.com/photos/random", {
      params: {
        client_id: apiKey,
        count: 10, // num of rendered photos
      },
    });

    setPhotos(res.data);
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

export default App;
