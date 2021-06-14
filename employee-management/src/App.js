import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./Front-end/components/navbar";
import SideBar from "./Front-end/components/sidebar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <SideBar />
    </div>
  );
}

export default App;
