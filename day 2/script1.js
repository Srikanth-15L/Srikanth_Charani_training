// Assignment 2 leap year
var a= 'leap year';
console.log(a);
console.log("The Leap year or not");
let year = 2020;
let month = 2;
let days;

if (month === 2) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    days = 29;
  } else {
    days = 28;
  }
} else if (
  month === 1 || month === 3 || month === 5 ||
  month === 7 || month === 8 || month === 10 ||
  month === 12
) {
  days = 31;
} else {
  days = 30;
}

console.log("Number of days:", days);
