//function overloading
// function with same name but different parameters
//different types of parameters tin return type

//3 step
// write a single function
// implement the function 
// call the function

//syntex
/*function display(id : number, ) : string // signature
function display(name : string) : string // signature
function display(value : number|string):string {
    if (typeof value == "number")
    {
        return (`userid : ${value}`)
    }
    else {
        return (`username :${value}`)
    }
}
console.log(display(101));
console.log(display("kamalesh"));

// example 2 - different number of parameters
function add(a: number, b: number): number
function add(a: number, b: number, c: number): number
function add(a: number, b: number, c?: number): number {
    if (c === undefined)
    {
        return a + b ;
    }
    else {
        return a + b + c;
    }
}
console.log(add(10, 20));
console.log(add(10, 20, 30));*/

// example 3 - different return type

/*function display(value: number | string): string | number {
    if (typeof value == "string"){

    return (` person name to ${ value}`)
    }
    else {
        return value*2
    }

}
console.log(display("kamalesh"));
console.log(display(25));*/


//example 4
/*
function display( name : string ) : string
function display( age : number ) : string
function display( married : boolean ) : string
function display( value : string | number | boolean ) : string 
{
    if (typeof value == "string")
     {
        return (`person name to ${value}`)
    }
    else if (typeof value == "number") 
    {
        return (`person age to ${value}`)
    }
    else 
        {
        let result : string = value ? "married" : "unmarried";
        return (`person is married to ${result}`)
    }
}
console.log(display("kamalesh"));
console.log(display(25));
console.log(display(false));

*/

