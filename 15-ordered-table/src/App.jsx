import { useState } from "react";

import SearchBar from "./components/SearchBar";
import TableHeader from "./components/TableHeader";
import TableRow from "./components/TableRow";

function App() {
  const [data, setData] = useState([
    { name: "Ana", age: 25, workAs: "Engenheira" },
    { name: "João", age: 30, workAs: "Desenvolvedor" },
    { name: "Maria", age: 22, workAs: "Designer" },
    { name: "Carlos", age: 40, workAs: "Gerente" },
    { name: "Sofia", age: 28, workAs: "Analista" },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [sortConfig, setSortConfig] = useState(null);

  const sortedData = [...data].sort((a, b) => {
    if (sortConfig !== null) {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === "ascending" ? -1 : 1;
      }

      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === "ascending" ? 1 : -1;
      }
    }

    return 0;
  });

  function onColumnClick(key) {
    let direction = "ascending";

    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === "ascending"
    ) {
      direction = "descending";
    }

    setSortConfig({ key, direction });
  }

  const filteredData = sortedData.filter(
    (row) =>
      row.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
      row.workAs.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
  );

  return (
    <div className="container">
      <h1>Tabela de usuários</h1>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <table>
        <TableHeader onColumnClick={onColumnClick} />
        <tbody>
          {filteredData.map((row, index) => (
            <TableRow key={index} row={row} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
