// arrays can multiple values in same or different data type
// arrays are declared using [] or generic 'array<T>' type

/*let num : number[] = [1,2,3,4,5];
let str : string[] = ["kamalesh","poovendran"];
let boolean : boolean[] = [true,false,true];
let any : any[] = [1,"kamalesh",true];

console.log(num);
console.log(str);
console.log(boolean);
console.log(any);

for (let i=0;i<str.length;i++)
    {
        console.log(str[i]);
    }

for (let i=0;i<any.length;i++)
    {
        console.log(any[i]);
    }
*/
   /* let names : string[] =  []

    names.push("kamalesh");
    names.push("poovendran");
    console.log(names);

    for (let i=0;i<names.length;i++)
    {
        console.log(names[i]);
    }
        

    */


    // 2 dimensional array - 
/*
    let matrix : number[][] = [[1,2,3],[4,5,6],[7,8,9]];
    console.log(matrix);

    for (let i=0;i<matrix.length;i++)
    {
        for (let j=0;j<matrix[i].length;j++)
        {
            console.log(matrix[i][j]);
        }
    }
*/

    let employee : (string|number)[][] = [["kamalesh",1],["poovendran",2]];
    console.log(employee[1][0]);


    for (let i=0;i<employee.length;i++)
    {
        for (let j=0;j<employee[i].length;j++)
        {
            console.log(employee[i][j]);
        }
    }


    // using for in loop
    for (let i in employee)
    {
        for (let j in employee[i])
        {
            console.log(employee[i][j]);
        }
    }