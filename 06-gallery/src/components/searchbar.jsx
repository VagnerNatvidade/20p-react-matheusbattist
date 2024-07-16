import React, { useState } from "react";

export function SearchBar({ setQuery, setCategory, setActivateSearch }) {
  const [localQuery, setLocalQuery] = useState("");
  const categories = [
    "Natureza",
    "Pessoas",
    "Tecnologia",
    "Animais",
    "Esportes",
  ];

  return (
    <div className="search-bar">
      <input
        type="text"
        value={localQuery}
        onChange={(e) => setLocalQuery(e.target.value)}
        placeholder="Pesquisar fotos..."
      />
      <button
        onClick={() => {
          setQuery(localQuery);
          setActivateSearch(true);
        }}
      >
        Pesquisar
      </button>
      <select
        onChange={(e) => {
          setCategory(e.target.value);
          setActivateSearch(true);
        }}
      >
        <option value="">Todas as categorias</option>
        {categories.map((category) => (
          <option value={category} key={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
}
