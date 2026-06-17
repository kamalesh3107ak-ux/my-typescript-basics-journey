/*type of functions*/

//1.named function 

//syntex
/*function functionname (parameter): return type 
{
   code
}
function name ()

example */
/*
function display(): void 
{
  console.log("typing age")
}
display()*/

/*
function display(): string
{
  return"typescript";
  
}
console.log(display());
display()*/

/*function addnumber(a:number,b:number):void
{
   console.log(a+b);
}
addnumber(60,54);*/

//function with three parameters
/*
function addnumber(num:number[]): number
{
  console.log(num.length);
  return num.length;
}
addnumber([1,4,64,32,5,76,])
*/
/*

function add(...num: (number | string | boolean)[]): void
 {
  console.log(num.length);
}

add(10, "s", true, false, 25);*/

/*function displaydetails(id:number,name:string,mailid?:string)

{
  
  console.log(id);
  console.log(name);

  if(mailid!=undefined)
  {
    console.log(mailid)
  }
}

displaydetails (111,"kk","cbd@gmail.com")

*/


/*
function addnumbers(a:number,b:number):number
{
  return a+b
}
 console.log(addnumbers(34,76));
 (or)


let total:number = addnumber(43,53);
console.log(total);
*/
/*
function calculatediscount(price:number,rate:number=0.50):number
{
  let discount = price * rate;
  return discount;
}*/



//2.nameless function
/*
let display = function  ():void
{
  console.log("typescript")
}
display();*/

//3.arrow funtion 
/*
let variable = (perameter):return type=> 
{
  console.log("kamalesh")
}
variable()*/

/*let add = (a:number,b:number):void=>
{
  console.log(a+b);
}
add (43,76);*/


/*let add = (x:number,y:number):number=>
{
  return(x*y)
}
console.log(add(43,76));
*/



