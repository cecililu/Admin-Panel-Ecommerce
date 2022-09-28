import NavBar from "./Components/NavBar/NavBar";
import SideBar from "./Components/SideBar/SideBar";
import './app.css'
function App() {
  return (
    <div className="App">
     <NavBar/>   
      <div className="container">
      <SideBar/>
      <div className="other">
       OTHER
      </div>
       
      </div>

    </div>
  );
}

export default App;
