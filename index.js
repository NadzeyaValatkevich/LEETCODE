//task 1
//217.Contains Duplicate

var containsDuplicate = function (nums) {
    const res = {};
    nums.forEach((elem) => {
        res[elem] = 1
    });
    return (Object.keys(res).length < nums.length)
};

console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));


//task 2
//268. Missing Number

var missingNumber = function (nums) {
    let n = nums.length;
    let newArray = [];
    function f(n) {
        if (n < 0) {
            return
        } else {
            newArray.unshift(n);
            f(n - 1)
        }
    };
    f(n);
    for(let i of newArray) {
        if(!nums.includes(i)){
            return i
        }
    }
};

console.log(missingNumber([9,6,4,2,3,5,7,0,1]))

