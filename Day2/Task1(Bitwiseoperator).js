//Bitwise AND operator (&)
console.log("Bitwise AND operator")
var a=80;
if((a&1)==0){
    console.log(a," is even number.")
}
else{
    console.log(a," is odd number.");
}

//Bitwise XOR (^)
console.log("Bitwise XOR operator")
if((a^1)==(a-1)){
    console.log(a," is odd number.");
}
else{
    console.log(a," is even number.");
}


//Bitwise OR(|)
console.log("Bitwise OR operator")

if(((a | 1) > a)){
    console.log(a," is even number.");
}
else{
    console.log(a," is odd number.");
}

//Bitwise Shift(>>  <<)
console.log("Bitwise shift operator")

if(a== ( a>>1 ) << 1){
    console.log(a," is even number.");
}
else{
    console.log(a," is odd number.");
}
