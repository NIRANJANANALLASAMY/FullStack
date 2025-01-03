// arrowFun=(stud)=>{
//     return stud[0]
// }
// console.log(arrowFun(['aiml,it,cse',"it","cse","aiml"]));

//destructuring
 var mark=[90,87,96]

 var[m1,m2,m3]=mark
 console.log(m1,m2,m3);

 var[m1,m3]=mark
 console.log(m1,m3);

 //ternary 
 a=10
 out=(a%2==0)?"even" : "odd"
 console.log(a,"is",out);

 //spread 
 arr1=[10,20,30]
 arr2=[...arr1,40,50]
 console.log(arr2);
 
 arr3=[60,70]
 arr4=[...arr2,arr3]
 console.log(arr4);

 //rest
function restOp(...arr1){
    
}

//scope
var a=10
const b =3.14
console.log("a",a);
console.log("b is",b);
{
    var a=5
    let b=1833.3
    console.log(a);
    console.log(b);
}
console.log(a);

//HOISTING
console.log(j);
var j=12
console.log(j);

console.log(i);
let i=12
console.log(i);