// modules 
// This section defines the available modules in the application.
// Modules are used to organize code into separate files and namespaces.
// They help in maintaining code modularity and reusability.
// syntax
/*module ModuleName {
    // module contents
}*/

// example
export let carname : string = "thor";
export function addnumber(a:number,b:number): number {
    return a+b;
}
export class format {
    static changeuppercase(str: string): string {
        return (str.toUpperCase());
    }
}