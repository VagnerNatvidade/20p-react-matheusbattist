import { useDispatch } from "react-redux";
import { addToDo } from "../slices/toDoSlice";
import { useState } from "react";

function AddToDo() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();

    if (input.trim() === "") return;
    dispatch(addToDo(input));
    setInput("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Adicione uma tarefa..."
      />
      <button type="submit">Enviar</button>
    </form>
  );
}

export default AddToDo;
