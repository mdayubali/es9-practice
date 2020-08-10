// Insert multiple array element  in an array using concat;
const age = [10, 20, 30, 40]
const age1 = [50, 60, 70, 80]
const age2 = [55, 65, 75, 85]
const allAge = age.concat(age1).concat([5, 15]).concat(age2);
console.log(allAge);
// Insert multiple array element  in an array in spread operator;
const allAge2 = [...age, 1, 2, ...age1, ...age2, 5, 6];
console.log(allAge2);

const business = 500;
const minister = 522;
const teacher = 250;
const maximum = Math.max(business, minister, teacher);
console.log(maximum);
// Using spread 

const marks = [500, 200, 533, 23, 534, 343]
const max = Math.max(...marks);
console.log(max);