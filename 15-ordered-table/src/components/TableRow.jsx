function TableRow({ row }) {
  return (
    <tr>
      <td>{row.name}</td>
      <td>{row.age}</td>
      <td>{row.workAs}</td>
    </tr>
  );
}

export default TableRow;
