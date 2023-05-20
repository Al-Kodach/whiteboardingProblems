

function logBetween(ln, hn) {
     /* 
        space complexity = O(n) 
        size of array of memory is already allocated;
        comparing this to arr.push(), where the program has to request 
        for memory to store data, meaning at every push, 
        the program have to request a memory block to contain the current size,
    */;
    
    // time complexity is O(1) when hn is below 60000 
     /* 
        time complexity = O(n); when hn is 600000 
        increase range is 4ms - 6ms
    */
    let arr = new Array(hn);
    
    for (let i = ln; i <= hn; i++) {
        let index = Math.abs(ln - i)
        arr[index] = i;
    }


    return arr;
}

let s, e;

s = new Date();
logBetween(-1, 2);  // => [-1, 0, 1, 2]
logBetween(14, 6);  // => []
logBetween(4, 6);  // => [4, 5, 6]
logBetween(0, 60000);
e = new Date();

console.log(e - s + 'ms');
