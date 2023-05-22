## logBetween

Define a function logBetween(lowNum, highNum) that will return an array from lowNum to highNum, inclusive. Inclusive means that the range includes lowNum and highNum.

Examples:

logBetween(-1, 2);  // => [-1, 0, 1, 2]
logBetween(14, 6);  // => []
logBetween(4, 6);  // => [4, 5, 6]
-------------------------------------------------------------

## logBetweenStepper
Write a function logBetweenStepper(min, max, step) that takes in three numbers as parameters. The function should return an array of numbers between min and max at step intervals.

Examples:

logBetweenStepper(5, 9, 1) // => [5, 6, 7, 8, 9]
logBetweenStepper(-10, 15, 5) // => [-10, -5, 0, 5, 10, 15]
-------------------------------------------------------------

## printReverse

Write a function printReverse(min, max) that returns an array of all numbers from max to min (exclusive), in reverse order.

Examples:

printReverse(13, 18) // => [17, 16, 15, 14]
printReverse(90, 94) // => [93, 92, 91]
-------------------------------------------------------------

## fizzBuzz

Define a function fizzBuzz(max) that takes a number and returns an array of every number from 0 to max that is divisible by either 3 or 5, but not both.

Examples:

fizzBuzz(20); // => [3, 5, 6, 9, 10, 12, 18]
-------------------------------------------------------------

## isPrime

Define a function isPrime(number) that returns true if number is prime. Otherwise, false. Assume number is a positive integer.

Examples:

isPrime(2);  // => true
isPrime(10);  // => false
isPrime(11);  // => true
isPrime(9);  // => false
isPrime(2017);  // => true


## factorArray

Write a function factorArray(array, number) that takes in an array of numbers and a number and returns an array of all the factors.

Examples:

factorArray([2,3,4,5,6],20) // => [2,4,5]
factorArray([2,3,4,5,6],35) // => [5]
factorArray([10,15,20,25],5) // => []

