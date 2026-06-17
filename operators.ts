//operators types(6 types)

/*1. Arithmetic operators
2. Assignment operators
3. Comparison operators
4. Logical operators
5. increment and decrement operators
6. Ternary operators*/

//1. Arithmetic operators
//(+, -, *, /, %, ++, --)
//example
/*let num1: number = 10;
let num2: number = 5;
let sum: number = num1 + num2;
console.log("The sum is:", sum);
//other arithmetic operations
let subraction : number = num1 - num2;
console.log("The subraction is:",subraction);
let multiplication : number = num1 * num2;
console.log("The multiplication is:",multiplication);
let division : number = num1 / num2;
console.log("The division is:",division);
let modulus : number = num1 % num2;
console.log("The modulus is:",modulus);
//square root
let squareRoot : number = Math.sqrt(num1);
console.log("The square root is:",squareRoot);*/



//2. Assignment operators
//(=, +=, -=, *=, /=, %=)
//example
 //=
//let x: number = 10; //assign 10 to x
//+=
/*let x: number = 10;
let y: number = 5;
x += y; //x = x + y
console.log("The value of x after += is:", x);
//-=
x -= y; //x = x - y
console.log("The value of x after -= is:", x);
//*=
x *= y; //x = x * y
console.log("The value of x after *= is:", x);
// /=
x /= y; //x = x / y
console.log("The value of x after /= is:", x);
//%=
x %= y; //x = x % y
console.log("The value of x after %= is:", x);*/

//3. Comparison operators
//(==, ===, !=, !==, >, <, >=, <=) (=== === value and type, strict equality)
//example
/*let a: number = 10;
let b: number = 5;
console.log("a == b:", a == b); //false
console.log("a === b:", a === b); //false
console.log("a != b:", a != b); //true
console.log("a !== b:", a !== b); //true
console.log("a > b:", a > b); //true
console.log("a < b:", a < b); //false
console.log("a >= b:", a >= b); //true
console.log("a <= b:", a <= b); //false*/

//4. Logical operators
//(&&, ||, !)
//example
/*let p: boolean = 12 > 5;
let q: boolean = 23 < 15;
console.log("p && q:", p && q); //false
console.log("p || q:", p || q); //true
console.log("!p:", !p); //false
console.log("!q:", !q); //true*/

//5.increment and decrement operators
//(++ , --)
//types of increment and decrement
//prefix and postfix
//prefix(++a, --a) , postfix(a++, a--)
//example
/*let num: number = 10;
//prefix increment
console.log("Prefix Increment:", ++num); //11
//postfix increment
console.log("Postfix Increment:", num++); //11
console.log("Value after Postfix Increment:", num); //12
//prefix decrement
console.log("Prefix Decrement:", --num); //11
//postfix decrement
console.log("Postfix Decrement:", num--); //11
console.log("Value after Postfix Decrement:", num); //10*/

//6. Ternary operators
//syntax
//(condition ? true : false)
//example
//let personAge: number = 14;
//let result:string = (personAge>=18) ? "eligible" : "not eligible";
//console.log(result); 