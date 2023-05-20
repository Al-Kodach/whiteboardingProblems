

function logBetween(min, max) {
     /* 
        space complexity = O(n) 
        size of array or memory is already allocated;
        comparing this to arr.push(), where the program has to request 
        for memory to store data, where at every push, 
        the program have to request a memory block to contain the current size,
    */;
    
    // time complexity is O(1) when max is below 60000 3ms
     /* 
        time complexity = O(1); 
        trade space - time: for 1000000 // 12ms
        
    */
    let arr = new Array(max);

    for (let i = min; i <= max; i++) {
        let index = Math.abs(min - i)
        arr[ index ] = i;
    }

    return arr;
}

let s, e;

s = new Date();
logBetween(-1, 2);  // => [-1, 0, 1, 2]
logBetween(14, 6);  // => []
logBetween(4, 6);  // => [4, 5, 6]
logBetween(0, 1000000); // Runtime:  11ms
e = new Date();
console.log('\nlogBetween -> Runtime: ', e - s + 'ms\n');

function logBetweenStepper(min, max, step) {
    /* 
       logBetweenStepper space complexity is higher compare to logBetween stepper,
       due to number of variables, time complexity is affected O(n) 
    */

    let tradeSpaceForTime = new Array(max);

    for (let i = min; i <= max; i+=step) {
        let index = Math.abs(min - i) / step;
        tradeSpaceForTime[index] = i;
    }
    return tradeSpaceForTime;
}

s = new Date();
// logBetweenStepper(5, 9, 1) // => [5, 6, 7, 8, 9]
// logBetweenStepper(-10, 15, 5) // => [-10, -5, 0, 5, 10, 15]
logBetweenStepper(0, 1000000, 1); // Runtime:  29ms array.

e = new Date();

console.log('logBetweenStepper => Runtime: ', e - s + 'ms\n');


