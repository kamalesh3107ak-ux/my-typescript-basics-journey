// inheritence - inherit the properties and methods of a parent class to a child class
// that is used reuse the code of a parent class in a child class

// types of inheritence
// 1. single inheritence - inherit the properties and methods of a parent class to a child class

// 2. multiple inheritence - inherit the properties and methods of multiple parent classes to a child class
// its is not possible in typescript 

// 3. multilevel inheritence - inherit the properties and methods of a parent class to a child class
// 4. hierarchical inheritence - inherit the properties and methods of a parent class to multiple child classes
// 5. hybrid inheritence - inherit the properties and methods of multiple parent classes to a child class


// syntax
/*class ParentClass {
        // properties and methods
    }
    
    class ChildClass extends ParentClass {
        // properties and methods
    }
    */

    // example
   /* class Person {
        name: string;
        age: number;
        constructor(name: string, age: number) {
            this.name = name;
            this.age = age;
        }
    }
    
    class child extends Person {
        employee: string;
        constructor(name: string, age: number, employee: string) {
            super(name, age);
            this.employee = employee;
        }
    
    
    display()
    {
        console.log(this.name);
        console.log(this.age);
        console.log(this.employee);

    }
    }
let c1 = new child("kamalesh", 25, "programmer");
c1.display();*/
    /*const employee = new child("kamalesh", 25, "programmer");
    console.log(employee.name); // "kamalesh"
    console.log(employee.age); // 25
    console.log(employee.employee); // "programmer"*/