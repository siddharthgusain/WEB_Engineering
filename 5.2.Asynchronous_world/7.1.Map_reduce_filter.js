// ------------------MAP---------------
const arr = [1, 2, 3, 4, 5];

const output = arr.map((item) => {
    return item * 2;
});

console.log(output); // [2,4,6,8,10]
console.log(arr); // [1,2,3,4,5]

// Map creates new array without mutating original array


//-------------------Filter-------------------

const arr1 = [1, 2, 3, 4, 5, 6, 7, 8];

const output1 = arr1.filter((item) => {
    return item % 2;
})

console.log(output1); //[1,3,5,7]
console.log(arr1); //[1,2,3,4,5,6,7,8]

// Filter the array according to condition

//--------------------------REDUCE-------------------

const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const output3 = arr2.reduce((acc, curr) => {
    return acc + curr;
}, 10);
// second arguement is accumulator initial value
// return a single value

console.log(output3); // 65
console.log(arr2); //[1->10]




