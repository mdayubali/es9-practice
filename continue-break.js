//break stop code execution and exit from the block or loop
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    if (numbers[i] >  4) {
        break;
    }
    console.log(element)
}
console.log ('continue skip the condition and run the rest code in a block or a lop')
const nums = [1, -2, 3, -4, 5, -6, 7, 8, 9];
for (let i = 0; i < nums.length; i++) {
    const elements = nums[i];
    if (nums[i] < 0) {
        continue;
    }
    console.log(elements)
    
}