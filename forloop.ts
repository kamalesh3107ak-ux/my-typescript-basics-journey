//for loop types
// 1. for...in loop
// 2. for...of loop


//1. for...in loop
// it is based on index
//syntax
/*for (let  i in array)
{
    console.log("The value of i is:", i);
}
    */

//example
let arr : number[] = [1,2,3,4,5];
for (let i in arr)
{
    console.log("The value of i is:", i);
}

// for...of loop
// it is based on value
//syntax
/*for (let  i of array)
{
    console.log("The value of i is:", i);
}
    */

//example
let arr1 : number[] = [1,2,3,4,5];
for (let i of arr1)
{
    console.log("The value of i is:", i);
}

//example2
let arr2 : string[] = ["kamalesh","poovendran"];
for (let i of arr2)
{
    console.log("The value of i is:", i);
}

//example3
let arr3 : boolean[] = [true,false,true];
for (let i of arr3)
{
    console.log("The value of i is:", i);
}

//example4
let arr4 : any[] = [1,"kamalesh",true];
for (let i of arr4)
{
    console.log("The value of i is:", i);
}