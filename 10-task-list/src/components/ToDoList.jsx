import { useSelector, useDispatch } from "react-redux";
import { toggleToDo, removeToDo, filterToDo } from "../slices/toDoSlice";

function ToDoList() {
  const { list, filter } = useSelector((state) => state.toDos);

  const filteredList = list.filter((toDo) => {
    if (filter == "all") return true;
    if (filter == "completed") return toDo.completed;
    if (filter == "incomplete") return !toDo.completed;
    return true;
  });

  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(filterToDo("all"))}>Todas</button>
      <button onClick={() => dispatch(filterToDo("completed"))}>
        Completas
      </button>
      <button onClick={() => dispatch(filterToDo("incomplete"))}>
        Incompletas
      </button>
      <ul>
        {filteredList.map((toDo) => (
          <li key={toDo.id}>
            <span
              onClick={() => dispatch(toggleToDo(toDo.id))}
              className={toDo.completed ? "line-through" : null}
            >
              {toDo.text}
            </span>
            <button onClick={() => dispatch(removeToDo(toDo.id))}>
              Remover
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
