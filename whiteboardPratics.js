

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



let FizzbuzzMemo = {};

function fizzBuzz(max) {
    /* 
        we trade space for time;
        time complexity O(n) at first call
        space complexity O(n)
    */
   if (max in FizzbuzzMemo) return FizzbuzzMemo[max];

    let nums = new Array(max),
        size = 0;

    for (let i = 0; i < max; i++) {
        if ((i % 3 === 0 ^ i % 5 === 0)) {
            if (!(i % 3 === 0 && i % 5 === 0)) {
                nums[size] = i;
                size++;
            }
        }
    }

    nums.length = size;
    FizzbuzzMemo[max] = nums;
    return FizzbuzzMemo[max];

    // after ceching, we now have a time complexity of O(1)
    // when same number is called multiple times
}

s = new Date();
fizzBuzz(20); // => [3, 5, 6, 9, 10, 12, 18] // 0ms
fizzBuzz(10000000); // => Runtime: 66ms
e = new Date();
console.log('fizzBuzz =>  Runtime: ', e - s + 'ms\n'); // 66ms


s = new Date();
fizzBuzz(20); // => [3, 5, 6, 9, 10, 12, 18] // 0ms
fizzBuzz(10000000); // => Runtime: 0ms
e = new Date();
console.log('fizzBuzz =>  Runtime: ', e - s + 'ms\n'); // 0ms


function isPrime(number) {
    // space complexity is O(1);
    // time compexity is O(n);

    // asume num is a positive integer;
    if (number <= 1 ) return false;

    // execution reach here when number is positive greater than 1.

    // iterate from 2 to number/2.
    // to archive a time complexity of O(1), we use Math.sqrt();
    // we iterate once on every number.
    for (let i = 2; i < Math.sqrt(number); i++) {
        // check if i divides number without leaving a reminder.
        if (number % i === 0) {
           return false;
        }
    }

    // after iterating, number is prime
    return true;

    // now time complexity is O(1), space complexity is also O(1)
}

s = new Date();
isPrime(2);  // => true
isPrime(10);  // => false
isPrime(11);  // => true
isPrime(9);  // => false
isPrime(2017);  // => true

e = new Date();

console.log('isPrime =>  Runtime: ', e - s + 'ms\n'); // 0ms

function factorArray(array,  number) {
  /* 
    we are returning an array, we modify the original array
    to achieve a space complexity of O(1);
  */
    
   
}

factorArray([2,3,4,5,6],20) // => [2,4,5]
factorArray([2,3,4,5,6],35) // => [5]
factorArray([10,15,20,25],5) // => []