function TableHeader({ onColumnClick }) {
  return (
    <thead>
      <tr>
        <th onClick={() => onColumnClick("name")}>Nome</th>
        <th onClick={() => onColumnClick("age")}>Idade</th>
        <th onClick={() => onColumnClick("workAs")}>Cargo</th>
      </tr>
    </thead>
  );
}

export default TableHeader;
