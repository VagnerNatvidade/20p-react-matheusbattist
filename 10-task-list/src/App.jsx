import AddToDo from "./components/AddToDo";
import ToDoList from "./components/ToDoList";

function App() {
  return (
    <div className="container">
      <h1>Lista de tarefas com Redux</h1>
      <AddToDo />
      <ToDoList />
    </div>
  );
}

export default App;
