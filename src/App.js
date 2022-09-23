import Navbar from "./Components/Navbar/Navbar";
import "./App.css"
import Intro from "./Components/Intro/Intro";
import Services from "./Components/Services/Services";
import Works from "./Components/Works/Works";
function App() {
  return (
    <div className="App">
    <Navbar/>
    <Intro/>
    <Services/>
    <Works/>
    </div>
  );
}

export default App;
