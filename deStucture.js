const name = { fName: 'ayub ali', age: 25, village: 'bishnauri', email: 'ayubh9288@gmail.com', phone: 1829799288, height: 6.2, favColor: 'blue', favPlay: 'cricket' };
// Normally CAll
console.log(name.height);
// using deStucture
const { email } = name;
const { favColor, age, fName } = name;
console.log(email);
console.log(favColor, age, fName);

// Array Destructure
const fullName = ['ayub', 'amazad', 'arfan', 'akkas', 'alfaz', 'arman', 'salman', 'muktar'];
const [firstName, second,...rest] = fullName;
console.log(firstName, second,rest); 
console.log(rest);

const complexObj = {
    name: 'abbas ali',
    info: {
        phone: 3934,
        address: 'homena',
        dist: 'kalabasan'
    }
}
const { address } = complexObj.info;

console.log(address);