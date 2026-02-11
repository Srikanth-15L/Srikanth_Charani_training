

var a = 1000;
var b = '10';
console.log(a, b);
console.log(typeof a, typeof b);
console.log(a + b);
console.log(typeof (a + b));
var c = Number(b);
console.log(typeof c);
//Arithmetic operators
var x = 2;
var y = 99;
console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x ** y);
console.log(y ** 2);
console.log(x / y);
console.log(x % y);
//Assignment operators
var num1 =7;
var num2 = 8;
console.log(num1 += num2);
console.log(num1 -= num2);
console.log(num1 *= num2);
console.log(num1 /= num2);
console.log(num1 %= num2);
console.log(num1 &= num2);
console.log(num1 |= num2);
//Unary operators 
var s = 20;
console.log(20);
var b = +20;
console.log(b);
var c = -20;
console.log(c);
console.log(++a);
console.log(--a);
console.log(a++);
console.log(a--);
//comparsion operators
var x = 203;
var y = 77;
console.log(x > y);
console.log(x < y);
console.log(x >= y);
console.log(x <= y);
console.log(x == y);
console.log(x != y);
console.log(x === y);
console.log(x !== y);
//logical operators
console.log(!undefined);
console.log(!null);
console.log(!5);
console.log(!0);
console.log(!NaN);
console.log(!{});
console.log(!'');
console.log(!'Text');
console.log(!false);
console.log(!true);
var x = 3;
var y = 5;
console.log(x && y);
console.log(x || y);