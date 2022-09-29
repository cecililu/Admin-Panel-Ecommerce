import NavBar from "./Components/NavBar/NavBar";
import SideBar from "./Components/SideBar/SideBar";
import './app.css'
import Homepage from "./pages/homepage/homepage";
import FeaturedInfo from "./Components/FeaturedInfo/FeaturedInfo";
function App() {
  return (
    <div className="App">
     <NavBar/>   
      <div className="container">
      <SideBar/>
       <Homepage/>   
        
      </div>

    </div>
  );
}

export default App;
