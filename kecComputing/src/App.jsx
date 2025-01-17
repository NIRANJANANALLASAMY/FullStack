import "./App.css";
import About from "./Components/FunctionalComponents/About";
import Contact from "./Components/FunctionalComponents/Contact";
import Gallery from "./Components/FunctionalComponents/Gallery";
import Home from "./Components/FunctionalComponents/Home";
import NavBar from "./Components/FunctionalComponents/NavBar";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import UseEffect from "./Components/FunctionalComponents/UseState";
import UseRef from"./Components/FunctionalComponents/UseRef";
import UseContext from"./Components/FunctionalComponents/UseContext";
import UseMemo from "./Components/FunctionalComponents/UseMemo";
import Signup from "./Components/FunctionalComponents/Signup";
import Login from "./Components/FunctionalComponents/Login";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element = {<Home />} />
          <Route path="/about" element= {<About college = "Kongu Engineering" clg1 = "Kongu Arts" clg2 = "Naturopathy"/>} />
          <Route path="/gallery" element = {<Gallery />} />
          <Route path="/contact" element = {<Contact />} />
          <Route path="/useState" element = {<UseEffect />} />
          <Route path="/useRef" element = {<UseRef />} />
          <Route path="/useContext" element = {<UseContext />} />
          <Route path="/UseMemo" element={<UseMemo/>}/>
          <Route path="/Signup" element={<Signup/>}/>
          <Route path="/Login" element={<Login/>}/>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
