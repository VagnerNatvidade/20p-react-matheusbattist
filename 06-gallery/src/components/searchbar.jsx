function SearchBar({ setQuery, setCategory, setActivateSearch }) {
  const categories = ["pessoas", "tech"];

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Pesquisar photos..."
        onChange={(e) => setQuerye(e.target.value)}
      />
      <button onClick={setActivateSearch(true)}>Pesquisar</button>
      <select
        onChange={(e) => {
          setCategory(e.target.value);
          setActivateSearch(true);
        }}
      >
        {categories.map((category) => (
          <option value={category} key={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SearchBar;
