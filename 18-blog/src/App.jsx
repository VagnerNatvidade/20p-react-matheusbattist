import { Outlet } from "react-router-dom";

import Nav from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
