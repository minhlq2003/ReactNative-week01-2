
// 1. Print numbers from 1 to 10"
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// 2. Print the odd numbers less than 100
for (let i = 1; i < 100; i += 2) {
    console.log(i);
}

// 3. Print the multiplication table with 7
for (let i = 1; i <= 10; i++) {
    console.log(`7 * ${i} = ${7 * i}`);
}

// 4. Print all the multiplication tables with numbers from 1 to 10
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
    console.log('---------');
}

// 5. Calculate the sum of numbers from 1 to 10
let sum = 0;
for (let i = 1; i <= 10; i++) {
    sum += i;
}
console.log('Sum from 1 to 10 is:', sum);

// 6. Calculate 10!
let factorial = 1;
for (let i = 1; i <= 10; i++) {
    factorial *= i;
}
console.log('10! is:', factorial);

// 7. Calculate the sum of even numbers greater than 10 and less than 30
sum = 0;
for (let i = 12; i < 30; i += 2) {
    sum += i;
}
console.log('Sum of even numbers greater than 10 and less than 30:', sum);

// 8. Create a function that will convert from Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}
console.log('25°C to Fahrenheit:', celsiusToFahrenheit(25));

// 9. Create a function that will convert from Fahrenheit to Celsius
function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}
console.log('77°F to Celsius:', fahrenheitToCelsius(77));

// 10. Calculate the sum of numbers in an array of numbers
function sumArray(numbers) {
    return numbers.reduce((sum, number) => sum + number, 0);
}
console.log('Sum of array [1, 2, 3, 4]:', sumArray([1, 2, 3, 4]));

// 11. Calculate the average of the numbers in an array of numbers
function averageArray(numbers) {
    return sumArray(numbers) / numbers.length;
}
console.log('Average of array [1, 2, 3, 4]:', averageArray([1, 2, 3, 4]));

// 12. Create a function that receives an array of numbers as argument and returns an array containing only the positive numbers
function positiveNumbers(numbers) {
    return numbers.filter(number => number > 0);
}
console.log('Positive numbers in [-1, 2, -3, 4]:', positiveNumbers([-1, 2, -3, 4]));

// 13. Find the maximum number in an array of numbers
function maxNumber(numbers) {
    return Math.max(...numbers);
}
console.log('Maximum number in [1, 2, 3, 4]:', maxNumber([1, 2, 3, 4]));

// 14. Print the first 10 Fibonacci numbers without recursion
let fib = [0, 1];
for (let i = 2; i < 10; i++) {
    fib.push(fib[i - 1] + fib[i - 2]);
}
console.log('First 10 Fibonacci numbers:', fib);

// 15. Create a function that will find the nth Fibonacci number using recursion
function nthFibonacci(n) {
    if (n <= 1) return n;
    return nthFibonacci(n - 1) + nthFibonacci(n - 2);
}
console.log('5th Fibonacci number:', nthFibonacci(5));

// 16. Create a function that will return a Boolean specifying if a number is prime
function isPrime(n) {
    if (n <= 1) return false;
    if (n <= 3) return true;
    if (n % 2 === 0 || n % 3 === 0) return false;
    for (let i = 5; i * i <= n; i += 6) {
        if (n % i === 0 || n % (i + 2) === 0) return false;
    }
    return true;
}
console.log('Is 11 prime?:', isPrime(11));

// 17. Calculate the sum of digits of a positive integer number
function sumOfDigits(number) {
    return number.toString().split('').reduce((sum, digit) => sum + parseInt(digit), 0);
}
console.log('Sum of digits in 123:', sumOfDigits(123));

// 18. Print the first 100 prime numbers
let primes = [];
let num = 2;
while (primes.length < 100) {
    if (isPrime(num)) {
        primes.push(num);
    }
    num++;
}
console.log('First 100 prime numbers:', primes);

// 19. Create a function that will return in an array the first “p” prime numbers greater than “n”
function primesGreaterThanN(p, n) {
    let primes = [];
    let num = n + 1;
    while (primes.length < p) {
        if (isPrime(num)) {
            primes.push(num);
        }
        num++;
    }
    return primes;
}
console.log('First 5 prime numbers greater than 10:', primesGreaterThanN(5, 10));

// 20. Rotate an array to the left 1 position
function rotateLeft(arr) {
    let firstElement = arr.shift();
    arr.push(firstElement);
    return arr;
}
console.log('Array [1, 2, 3, 4] rotated left:', rotateLeft([1, 2, 3, 4]));

// 21. Rotate an array to the right 1 position
function rotateRight(arr) {
    let lastElement = arr.pop();
    arr.unshift(lastElement);
    return arr;
}
console.log('Array [1, 2, 3, 4] rotated right:', rotateRight([1, 2, 3, 4]));

// 22. Reverse an array
function reverseArray(arr) {
    return arr.reverse();
}
console.log('Reversed array [1, 2, 3, 4]:', reverseArray([1, 2, 3, 4]));

// 23. Reverse a string
function reverseString(str) {
    return str.split('').reverse().join('');
}
console.log('Reversed string "hello":', reverseString('hello'));

// 24. Create a function that will merge two arrays and return the result as a new array
function mergeArrays(arr1, arr2) {
    return arr1.concat(arr2);
}
console.log('Merged arrays [1, 2] and [3, 4]:', mergeArrays([1, 2], [3, 4]));

// 25. Create a function that will receive two arrays of numbers as arguments and return an array composed of all the numbers that are either in the first array or second array but not in both
function symmetricDifference(arr1, arr2) {
    return arr1
        .filter(x => !arr2.includes(x))
        .concat(arr2.filter(x => !arr1.includes(x)));
}
console.log('Symmetric difference of [1, 2, 3] and [2, 3, 4]:', symmetricDifference([1, 2, 3], [2, 3, 4]));

// 26. Create a function that will receive two arrays and will return an array with elements that are in the first array but not in the second
function difference(arr1, arr2) {
    return arr1.filter(x => !arr2.includes(x));
}
console.log('Difference of [1, 2, 3] and [2, 3, 4]:', difference([1, 2, 3], [2, 3, 4]));
