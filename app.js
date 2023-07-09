"use strict";

// Exercise 1
function destructureExample(arr, obj) {
  const { name, age } = obj;
  const [first, , third] = arr;

  return {
    name: name,
    age: third,
  };
}

const obj = { name: "John", age: 30, city: "New York" };
const arr = [10, 20, 30, 40];

const exerciseOne = destructureExample(arr, obj);
console.log(exerciseOne);

// Exercise 2
function sumNumbers(...numbers) {
  let sum = 0;

  for (let i of numbers) {
    sum += i;
  }

  return sum;
}

const exerciseTwo = sumNumbers(1, 2, 3, 4, 5);
console.log(exerciseTwo);

// Exercise 3
function createGreeting(name) {
  return `Hello, ${name}! Welcome to our website.`;
}

const exerciseThree = createGreeting("Alice");
console.log(exerciseThree);

// Exercise 4
function isEven(num) {
  return num % 2 === 0 ? "Even" : "Odd";
}

const exerciseFour = isEven(7);
console.log(exerciseFour);

// Exercise 5
// orignal function
function multiply(a, b) {
  return a * b;
}
//arrow function
const multiplyArrow = (a, b) => a * b;

const mul = multiply(3, 2);
const mulArr = multiplyArrow(3, 2);

console.log(mul, mulArr);

// Exercise 6
function getLargestNumber(num1, num2) {
  const large = num1 > num2 ?? num2 > num1;

  if (large) {
    return num1;
  } else return num2;
}
console.log(getLargestNumber(10, 5));

// Exercise 7
function getAddressCity(address) {
  const city = address?.city;

  return city ? `${city}` : "Unknown";
}

const address = { street: "123 Main St", country: "USA" };

const exerciseSeven = getAddressCity(address);
console.log(exerciseSeven);

// Exercise 8
const doubleNumbers = (numbers) => {
  return numbers.map((num) => num * 2);
};
console.log(doubleNumbers([1, 2, 3, 4, 5]));

// Exercise 9
const filterEvenNumbers = (numbers) => {
  return numbers.filter((num) => num % 2 === 0);
};

console.log(filterEvenNumbers([1, 2, 3, 4, 5]));

// Exercise 10
const sumArray = (numbers) => {
  let cur = 0;
  return numbers.reduce((acc, cur) => acc + cur);
};

console.log(sumArray([1, 2, 3, 4, 5]));

// Exercise 11
const sortNumbers = (numbers) => {
  return numbers.sort();
};

console.log(sortNumbers([5, 2, 8, 1, 4]));
