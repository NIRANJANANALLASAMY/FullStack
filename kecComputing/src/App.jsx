// import React from 'react';
 import './App.css';
// // import ClassComponenteg from "./Components/ClassComponents/ClassComponenteg";
import Home from './Components/FunctionalComponent/Home';
import './assets/css/Home.css';
import About from './Components/FunctionalComponent/About';
import Contact from './Components/FunctionalComponent/Contact';
import Gallery from './Components/FunctionalComponent/Gallery';
import NavBar from './Components/FunctionalComponent/NavBar';

import { BrowserRouter,Routes,Route } from 'react-router-dom';
function App() {
    return (
        <div>

            <BrowserRouter>
             <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/contact' element={<contact/>}/>
                <Route path='/gallery' element={<Gallery/>}/>

             </Routes>
            </BrowserRouter>
          <NavBar></NavBar>
            <Home />
            <About college="kec"/>
            <Contact/>
            <Gallery/>
            <ClassComponenteg/> 
            
        </div>
    );
}

export default App;