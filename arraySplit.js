const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// start index to end before end index, and the array won't change
const part = nums.slice(2, 5);
console.log(part)
console.log(nums,'\n')
// splice
// Start index and how many number will cut and if you want you can push new elements in this splice part. Finally Array will change. splice are removed from the array
const removed = nums.splice(2, 3, 44,53,253,453,345)
console.log(removed,'/n');
console.log(nums)
//array join

const together = nums.join(";");
console.log(together)