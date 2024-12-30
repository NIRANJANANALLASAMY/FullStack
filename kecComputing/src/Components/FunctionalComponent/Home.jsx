import React from 'react';
import '../../assets/css/Home.css'
var Home = ()=>{
    
    var styling={

        fontSize:"20px",
        color:"blue"
    };
      return ( <div>
        <h1 style={styling} >Welcome to navigaation bar</h1> 
        <h2 id="idSeg">Testing Styling</h2>
        <p class="box-model">Hello</p>
        </div> 
      );
}
export default Home;