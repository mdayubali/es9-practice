// Normaly Function 
/*
function  doubleIt(num) {
    return num * 2;
}
const result = doubleIt(5); 
console.log(result);
*/

// Function expression 
/*
const doubleIt = function myFun(num) {
    return num * 2;
}
const result = doubleIt(10); 
console.log(result);
*/
// Arrow Function

/* Use Single parameter */
const doubleIt = num => num * 2;
console.log(doubleIt(5));

// Double parameter
const add = (x, y) => x + y;
const addResult = add(5, 50);
console.log(addResult); 

// Without parameter
const give5 = () => 5; 
console.log(give5());

// Multiple 
const doMath = (x, y)=>{
    const sum = x + y;
    const diff = x - y;
    const Result = sum * diff;
    return Result;
}

// console.log(doMath(4,3));
const resultDo = doMath(5, 4)
console.log(resultDo);
