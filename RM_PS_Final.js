/**
 * Remontada Final Problem Solving Task
 * File: RM_PS_Final.js
 */

// 01. Solve Me First
// Write a function that returns the sum of two integers.
/**
* @param {number} a
* @param {number} b
* @return {number}
*/
var solveMeFirst = function(a, b) {
    return a + b;
};

// 02. Multiply
// Write a function that returns the product of two numbers.
/**
* @param {number} a
* @param {number} b
* @return {number}
*/
var multiply = function(a, b) {
    return a * b;
};

// 03. Even or Odd
// Write a function that returns "Even" when a number is even and "Odd" when it is odd.
/**
* @param {number} number
* @return {string}
*/
var evenOrOdd = function(number) {
    return number % 2 === 0 ? "Even" : "Odd";
};

// 04. Return Negative
// Return the negative value of a number. If it is already negative, keep it negative.
/**
* @param {number} number
* @return {number}
*/
var makeNegative = function(number) {
    return number > 0 ? -number : number;
};

// 05. Opposite Number
// Return the opposite of a given number.
/**
* @param {number} number
* @return {number}
*/
var opposite = function(number) {
    return -number;
};

// 06. Simple Array Sum
// Return the sum of all integers in an array.
/**
* @param {number[]} ar
* @return {number}
*/
var simpleArraySum = function(ar) {
    return ar.reduce((acc, curr) => acc + curr, 0);
};

// 07. sleepIn
// Return true if it is not a weekday or you are on vacation.
/**
* @param {boolean} weekday
* @param {boolean} vacation
* @return {boolean}
*/
var sleepIn = function(weekday, vacation) {
    return !weekday || vacation;
};

// 08. monkeyTrouble
// Two monkeys are in trouble if both are smiling or neither is smiling. Return true in that case.
/**
* @param {boolean} aSmile
* @param {boolean} bSmile
* @return {boolean}
*/
var monkeyTrouble = function(aSmile, bSmile) {
    return aSmile === bSmile;
};

// 09. sumDouble
// Return the sum of two integers, but return double the sum when they are equal.
/**
* @param {number} a
* @param {number} b
* @return {number}
*/
var sumDouble = function(a, b) {
    return a === b ? 2 * (a + b) : a + b;
};

// 10. diff21
// Return the absolute difference between n and 21, doubling it when n is greater than 21.
/**
* @param {number} n
* @return {number}
*/
var diff21 = function(n) {
    return n > 21 ? 2 * (n - 21) : 21 - n;
};

// 11. parrotTrouble
// Return true when a talking parrot is causing trouble outside the allowed hours of 7 through 20.
/**
* @param {boolean} talking
* @param {number} hour
* @return {boolean}
*/
var parrotTrouble = function(talking, hour) {
    return talking && (hour < 7 || hour > 20);
};

// 12. makes10
// Return true if either number is 10 or their sum is 10.
/**
* @param {number} a
* @param {number} b
* @return {boolean}
*/
var makes10 = function(a, b) {
    return a === 10 || b === 10 || a + b === 10;
};

// 13. nearHundred
// Return true if n is within 10 of 100 or within 10 of 200.
/**
* @param {number} n
* @return {boolean}
*/
var nearHundred = function(n) {
    return Math.abs(100 - n) <= 10 || Math.abs(200 - n) <= 10;
};

// 14. posNeg
// Return true when one number is positive and the other is negative. If negative is true, both must be negative.
/**
* @param {number} a
* @param {number} b
* @param {boolean} negative
* @return {boolean}
*/
var posNeg = function(a, b, negative) {
    if (negative) {
        return a < 0 && b < 0;
    }
    return (a < 0 && b > 0) || (a > 0 && b < 0);
};

// 15. notString
// Add "not " to the beginning of a string unless it already starts with "not".
/**
* @param {string} str
* @return {string}
*/
var notString = function(str) {
    if (str.startsWith("not")) {
        return str;
    }
    return "not " + str;
};

// 16. Compare the Triplets
// Compare two three-element score arrays and return how many points each person earns.
/**
* @param {number[]} a
* @param {number[]} b
* @return {number[]}
*/
var compareTriplets = function(a, b) {
    let alice = 0;
    let bob = 0;
    for (let i = 0; i < a.length; i++) {
        if (a[i] > b[i]) {
            alice++;
        } else if (a[i] < b[i]) {
            bob++;
        }
    }
    return [alice, bob];
};

// 17. A Very Big Sum
// Return the sum of all values in an integer array.
/**
* @param {number[]} ar
* @return {number}
*/
var aVeryBigSum = function(ar) {
    return ar.reduce((acc, curr) => acc + curr, 0);
};

// 18. Staircase
// Create a right-aligned staircase of height n using # characters.
/**
* @param {number} n
* @return {string}
*/
var staircase = function(n) {
    let lines = [];
    for (let i = 1; i <= n; i++) {
        lines.push(' '.repeat(n - i) + '#'.repeat(i));
    }
    return lines.join('\n');
};

// 19. Grading Students
// Round a grade up to the next multiple of 5 when it is close enough; keep grades below 38 unchanged.
/**
* @param {number[]} grades
* @return {number[]}
*/
var gradingStudents = function(grades) {
    return grades.map(grade => {
        if (grade >= 38) {
            const remainder = grade % 5;
            if (remainder >= 3) {
                return grade + (5 - remainder);
            }
        }
        return grade;
    });
};

// 20. Time Conversion
// Convert a 12-hour AM/PM time string into 24-hour format.
/**
* @param {string} s
* @return {string}
*/
var timeConversion = function(s) {
    const modifier = s.slice(-2);
    let [hours, minutes, seconds] = s.slice(0, -2).split(':');

    if (hours === '12') {
        hours = modifier === 'AM' ? '00' : '12';
    } else {
        if (modifier === 'PM') {
            hours = String(parseInt(hours, 10) + 12).padStart(2, '0');
        }
    }

    return `${hours}:${minutes}:${seconds}`;
};

// 21. String Repeat
// Return a string repeated exactly n times.
/**
* @param {number} n
* @param {string} s
* @return {string}
*/
var repeatStr = function(n, s) {
    return s.repeat(n);
};

// 22. Reversed Strings
// Return the given string with its characters in reverse order.
/**
* @param {string} str
* @return {string}
*/
var solution = function(str) {
    return str.split('').reverse().join('');
};

// 23. Sum of Positive
// Return the sum of all positive numbers in an array. Return 0 if there are none.
/**
* @param {number[]} arr
* @return {number}
*/
var positiveSum = function(arr) {
    return arr.reduce((sum, num) => (num > 0 ? sum + num : sum), 0);
};

// 24. Grasshopper - Summation
// Return the sum of all integers from 1 through n.
/**
* @param {number} num
* @return {number}
*/
var summation = function(num) {
    return (num * (num + 1)) / 2;
};

// 25. Convert a Boolean to a String
// Convert a boolean value into the string "true" or "false".
/**
* @param {boolean} b
* @return {string}
*/
var booleanToString = function(b) {
    return String(b);
};
