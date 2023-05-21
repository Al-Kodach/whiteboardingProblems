

function logBetween(min, max) {
     /* 
        space complexity = O(n) 
        size of array or memory is already allocated;
        comparing this to nums.push(), where the program has to request 
        for memory to store data on every push, 
        the program have to request a memory block to contain the current size and incoming element only on every push,
    */;

    // time complexity is O(1) when max is below 60000 0ms
    /* 
       time complexity = O(1); 
       trade space - time: for 1000000 // 12ms
       
   */

    let nums = new Array(max),
        size = 0;

    for (let i = min; i <= max; i++) {
        let index = Math.abs(min - i)
        nums[index] = i;
        size++;
    }

    nums.length = size;
    return nums;
}

let s, e;

s = new Date();
logBetween(-1, 2);  // => [-1, 0, 1, 2]
logBetween(14, 6);  // => []
logBetween(4, 6);  // => [4, 5, 6]
logBetween(0, 1000000); // Runtime:  11ms
e = new Date();
console.log('\nlogBetween -> Runtime: ', e - s + 'ms\n'); // runtime 17ms

function logBetweenStepper(min, max, step) {
    /* 
       logBetweenStepper space complexity is higher compare to logBetween stepper,
       due to number of variables, time complexity is affected O(n)
       space complexity O(n)
       space complexity O(n)
    */

    let nums = new Array(max),
        size = 0;

    for (let i = min; i <= max; i += step) {
        let index = Math.abs(min - i) / step;
        nums[index] = i;
        size++;
    }

    nums.length = size;
    return nums;
}

s = new Date();
logBetweenStepper(5, 9, 1) // => [5, 6, 7, 8, 9]
logBetweenStepper(-10, 15, 5) // => [-10, -5, 0, 5, 10, 15]
logBetweenStepper(0, 1000000, 1); // Runtime:  23ms
e = new Date();

console.log('logBetweenStepper => Runtime: ', e - s + 'ms\n'); // Runtime 22ms

// let memo = {};

function printReverse(min, max) {

    /* 
        we trade space for time;
        space complexity = O(n);
        time complexity = O(1)
    */

    let nums = new Array(max),
        size = 0;

    for (let i = min; i < max; i++) {
        let index = i - min;
        nums[index] = max - index;
        size++;
    }

    nums.length = size;
    return nums;
}

s = new Date();
printReverse(13, 18) // => [17, 16, 15, 14]
printReverse(90, 94) // => [93, 92, 91]
printReverse(0, 5000000); // 33 ms runtime
e = new Date();
console.log('printReverse =>  Runtime: ', e - s + 'ms\n'); // 36ms

function fizzBuzz(max) {
    /* 
        we trade space for time;
    */
    let nums = new Array(max),
        size = 0;

    for (let i = 0; i < max; i++) {
        if ( (i % 3 === 0 ^ i % 5 === 0)) {
            nums[ size ] = i;
            size++;
            // if ( !(i % 3 === 0 && i % 5 === 0)) {
            // }
        }
    }

    nums.length = size;
    console.log(nums);
    return nums;
}

fizzBuzz(20); // => [3, 5, 6, 9, 10, 12, 18]