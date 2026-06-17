//tuples 
//tuples are used to store multiple values in a single variable
//tuples are immutable

// fixed length of on array
// each element has a specific index

//syntax
/*let tuple: [type, type, type] = [value1, value2, value3];
console.log(tuple);

//example
let tuple: [number, string, boolean] = [1, "kamalesh", true];
console.log(tuple);

//example 2
let tuple: [number, string, boolean] = [1, "kamalesh", true];
console.log(tuple[0]);
console.log(tuple[1]);
console.log(tuple[2]);

//example 3
let tuple: [number, string, boolean] = [1, "kamalesh", true];
tuple[0] = 2;
tuple[1] = "poovendran";
tuple[2] = false;
console.log(tuple);

*/

//example 4
/*let person: [number, string, ] = [1, "kamalesh"];
console.log(person);
console.log(person[0]);
console.log(person[1]);*/

//array methods

//push
//pop
//shift
//unshift
//concat
//slice
//splice
//indexOf
//includes
//strings

//syntax - push - add single/multiple values in the array
/*let tuple: [number, string, boolean] = [1, "kamalesh", true];
tuple.push(2);
tuple.push("poovendran");
tuple.push(false);
console.log(tuple);*/

//syntax - pop - remove single/multiple values in the array
// remove the last value in the array

//example
/*let tuple: [number, string, boolean] = [1, "kamalesh", true];

console.log("The tuple before pop is:", tuple);
tuple.pop();
tuple.pop();
console.log("The tuple after pop is:", tuple);*/

//syntax - shift - remove single/multiple values in the array
// remove the first value in the array

//example
/*let tuple: [number, string, boolean] = [1, "kamalesh", true];
console.log("The tuple before shift is:", tuple);
tuple.shift();
tuple.shift();
console.log("The tuple after shift is:", tuple);*/

//syntax - unshift - add single/multiple values in the array
// add the first value in the array

//example
/*let tuple: [number, string, boolean] = [1, "kamalesh", true];
console.log("The tuple before unshift is:", tuple);
tuple.unshift(2);
tuple.unshift("poovendran");
tuple.unshift(false);
console.log("The tuple after unshift is:", tuple);*/


//syntax - concat - merge two arrays
//example
 /*let tuple1: [number, string, boolean] = [1, "kamalesh", true];
 let tuple2: [number, string, boolean] = [2, "poovendran", false];
 let tuple3: (number, string, boolean)[] = tuple1.concat(tuple2);
 console.log(tuple3);*/


 // syntax - slice - extract a portion of an array
 // array.slice(startIndex, endIndex)
 // startIndex starts from 0
 // endIndex is exclusive
 // if ending is 3 , if will take 2 (3-1=2)



 // syntax - splice - remove a portion of an array
 // array.splice(startIndex, deleteCount, item1, item2, item3, ...)
 // startIndex starts from 0
 // deleteCount is the number of elements to remove
 // item1, item2, item3, ... are the elements to add

 //example
 /*let tuple: [number, string, boolean] = [1, "kamalesh", true];
 tuple.splice(1, 1, "poovendran");
 console.log(tuple);*/


 // syntax - indexOf - find the index of an element in an array
 // array.indexOf(element, startIndex)
 // startIndex starts from 0
 // if the element is not found, it returns -1

 //example
 /*let tuple: [number, string, boolean] = [1, "kamalesh", true];
 let index: number = tuple.indexOf("kamalesh");
 console.log(index);*/


 // syntax - includes - check if an element is in an array
 // array.includes(element, startIndex)
 // startIndex starts from 0
 // if the element is found, it returns true
 // if the element is not found, it returns false
 

 // syntax - strings - convert an array to a string
 // array.toString()
 // example
 /*let tuple: [number, string, boolean] = [1, "kamalesh", true];
 let string: string = tuple.toString();
 console.log(string);*/