// async function funName(){
//     setTimeout(()=>{
//     return "Hello"
// },1000)
//     }
// arrowFunName=async()=>{
//     return "kec"
// }
 
// console.log(funName())
// console.log(arrowFunName())



async function funName(){
    setTimeout(()=>{
        console.log("1 hello");
    },5000)
   console.log( await "Hello")
}

arrowFunName=async()=>{
    setTimeout(()=>{
        console.log("1 Kec");
    },4000)
    console.log(await "kec")
}
 
funName()
arrowFunName()





