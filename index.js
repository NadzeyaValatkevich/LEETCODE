//task 1
//217.Contains Duplicate

// var containsDuplicate = function (nums) {
//     const res = {};
//     nums.forEach((elem) => {
//         res[elem] = 1
//     });
//     return (Object.keys(res).length < nums.length)
// };
//
// console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));


//task 2
//268. Missing Number

// var missingNumber = function (nums) {
//     let n = nums.length;
//     let newArray = [];
//     function f(n) {
//         if (n < 0) {
//             return
//         } else {
//             newArray.unshift(n);
//             f(n - 1)
//         }
//     };
//     f(n);
//     for(let i of newArray) {
//         if(!nums.includes(i)){
//             return i
//         }
//     }
// };
//
// console.log(missingNumber([9,6,4,2,3,5,7,0,1]))


//task 3
//448Find All Numbers Disappeared in an Array
// var findDisappearedNumbers = function(nums) {
//     const n = nums.length;
//     const newArray = [];
//     function f(n) {
//         if(n <= 0 || n >= 10**5) return
//         else {
//             newArray.unshift(n)
//             f(n - 1)
//         }
//     }
//     f(n);
//     const result = newArray.filter((elem) => !nums.includes(elem));
//     return result
//     };
//
// console.log(findDisappearedNumbers([1,1]))

//task4
//136 Single Number

var singleNumber = function (nums) {
    const obj = {};
    for (let i of nums) {
        if (!obj[i]) {
            obj[i] = 1
        } else {
            obj[i] += 1
        }
    }
    for (let i in obj) {
        if (obj[i] === 1) return i
    }
};

console.log(singleNumber([2, 2, 1]))

