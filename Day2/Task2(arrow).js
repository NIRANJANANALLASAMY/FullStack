const array = [1, 2, 3, 4, 5];

// With argument and return type
const arrfun1 = (array) => array;
console.log("With argument and return type:", arrfun1(array));

// With argument but no return type
const arrfun2 = (array) => console.log("Array content:", array);
arrfun2(array);

// Without argument but with return type
const arrfun3 = () => array;
console.log("Without argument but with return type:", arrfun3());

// Without argument and without return type
const arrfun4 = () => console.log("No arguments and no return type. Array content:", array);
arrfun4();
