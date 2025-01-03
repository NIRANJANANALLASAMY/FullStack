//import { use, useMemo } from "react"
import {useMemo, useState } from "react"
var slowFunction=()=>{
    for (let i=0;i<10000000000;i++){}
        return number*2;   
}
    var UseMemo =()=>{
        var [num,setNum]=useState(0);
        var [theme,updateTheme]=useState(true);
        var  darklight={
            backgroundColor:(theme)?"Black":"white",
            color:theme ?"white":"Black",
        };
        var doublingNumber=useMemo(()=>{
            return slowFunction(num);
        },[num])
    return (
        <section>
            <h1>
                rhis is Memo
            </h1>
            <input type="number" value={num} onChange={(e)=>setNum(e.target.value)}/>
            <button onClick={()=>updateTheme(theme=!theme)}>Toggle Theme</button>
            <h2 style={darklight}>{doublingNumber}</h2>
        </section>
    );
};
export default UseMemo;