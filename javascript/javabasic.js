//operator
 
a=10
b=20
if(a==11)
{
    console.log(a,"is even");
}
else{
    console.log(a,"is odd");
}
console.log(a+b);
console.log(b/a);

var e=30
var e1="30"
if(e==e1){
    console.log("equal");
}
else{
    console.log("not equal");
}

if(e===e1)
{
    console.log("3equal");
}
else{
    console.log("3not equal");
}


arr=[12,13,14,3.15,"kec",'a',true]
console.log(arr);

a="kec"
console.log(a);
var b="aiml,it"
console.log(b);
const c="hrrr"
console.log(c);
let s="12"
console.log(s);



//loop
array = [10,20,30,2.3,23.3]

for(var a in array){
    console.log(a);
    console.log("element present in index ",a,"is",array[a]);
}
for(var b of array)
{
    console.log(a);
}

//Secondarydatatype
obj={
    "firstName":"dhana",
    "lastName":"varshini",
    "age":17
}
console.log(obj);

obj2={}
console.log(obj2);

obj3=new Object()
console.log(obj3);

obj4={}
obj4["movie"]="iron"
obj4["budget"]="122"
obj4["release"]="2024"
console.log(obj4);
console.log(obj4["movie"]);

//unary operator
m=10
m++;
console.log(m);