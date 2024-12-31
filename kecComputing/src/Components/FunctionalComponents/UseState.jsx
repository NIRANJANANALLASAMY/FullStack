import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UseEffect = () => {
    // const [text, setText] = useState("Kongu");

    //useEffect(() => {
    //     console.log(text)
    //     setText("KEC");
        
    // }, []);  
    // return (
    //     <section>
    //         <h1>UseEffect Example</h1>
    //         <input
    //             type="text"
    //             placeholder="Enter your text"
    //             value={text}
    //             onChange={(e) => setText(e.target.value)}
    //         />
    //         <h2>Text typed is {text} changed</h2>
    //     </section>
    // );
   const [post,setPost] = useState([]);
   useEffect(()=>{
    axios
    .get("https://jsonplaceholder.typicode.com/posts/")
    .then((res) =>setPost(res.data))
    .catch((err) =>console.log(err));
   },[]);
//    .catch(err)=>{
//     console.log(err);
//    });
// },[]);
   return(
    <section>
        <h1>Fetching data from json placeholder api</h1>
        {/* <h2>Post are {post}</h2> */}
        {/* <ol>
            {post.map((ele,text)=>{<li>{ele.userId}={text}</li>})}
        </ol> */}
        {/* <ul>
            {post.map((data)=>(<li key = {data.id}>{data.title}</li>))}
        </ul> */}
        {post.map((data) => (
                    <li key={data.id}>{data.title}</li>
                ))}
    </section>
   );
};


export default UseEffect;