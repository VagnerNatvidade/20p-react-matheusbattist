import { Outlet } from "react-router-dom";
import "./styles.css";

function App() {
  return (
    <div className="app">
      <h1>GitHub Finder</h1>
      <Outlet />
    </div>
  );
}

export default App;
