import { useState, KeyboardEvent } from "react";
import { BsSearch } from "react-icons/bs";
import "./styles.css";

type SearchProps = {
  loadUser: (userName: string) => Promise<void>;
};

function Search({ loadUser }: SearchProps) {
  const [userName, setUserName] = useState("");

  function handleKeyDown(e: KeyboardEvent) {
    if (e.key === "Enter") {
      loadUser(userName);
    }
  }

  return (
    <div className="search">
      <h2>Busque por um usuário:</h2>
      <p>Conheça seu melhores repositório</p>
      <div className="search_container">
        <input
          type="text"
          placeholder="Digite o nome do usuário..."
          onChange={(e) => setUserName(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button onClick={() => loadUser(userName)}>
          <BsSearch />
        </button>
      </div>
    </div>
  );
}

export default Search;
