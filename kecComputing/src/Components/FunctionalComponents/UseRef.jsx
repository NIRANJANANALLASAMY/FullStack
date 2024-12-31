import {useEffect, useRef,useState} from "react";
var UseRef =() =>{
    var [text,setText]= useState("");
    var prevText = useRef("");
    useEffect(()=>{
        prevText.current = text
    },[text])
    return(
    <section>
        <h1>This is example of useref</h1>
        <input type="text" value={text} onChange={(e)=>setText(e.target.value)}></input>
        <h2>My current render is {text}</h2>
        <h3>My previous render is {prevText.current}</h3>
    </section>
)

}
export default UseRef;