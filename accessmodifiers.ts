// access modifiers

// public - default
// private - not accessible outside the class
// protected - accessible within the class and its subclasses


// syntax
/*class ClassName
{
    public accessModifier: type;
    private accessModifier: type;
    protected accessModifier: type;
}*/

// example
/*class Person {
    public name: string;
    private age: number;
    protected country: string;
  
    constructor(name: string, age: number, country: string) {
      this.name = name;
      this.age = age;
      this.country = country;
    }
  
    public display(): void {
      console.log(`Name: ${this.name}, Age: ${this.age}, Country: ${this.country}`);
      }
      }
    
      let person = new Person("John", 30, "USA");
      person.display();*/

      // when you create an object constructor will automatically invoked / called
// we can create multiple objects with the same class objects are independent


// example
/*class Person {
    public name: string;
    private age: number;
    protected country: string;
  
    constructor(name: string, age: number, country: string) {
      this.name = name;
      this.age = age;
      this.country = country;
    }
  
    public display(): void {
      console.log(`Name: ${this.name}, Age: ${this.age}, Country: ${this.country}`);
      }
      }
    
      let person = new Person("John", 30, "USA");
      person.display();

      let person2 = new Person("John", 30, "USA");
      person2.display();

      let person3 = new Person("John", 30, "USA");
      person3.display();*/

      // example 2
       /* class student {
        public name: string;
        public age: number;
    
      
        constructor(name: string, age: number) {
          this.name = name;
          this.age = age;
        }
      
         get information (): string{
          return `Name: ${this.name}, Age: ${this.age}`
          }
          }
          
          let student2 = new student("John", 30,);
          console.log(student2.information)*/


// example 2

/*class friends {
    public name: string;
    public age: number;
  
    constructor(n: string, age: number,) {
      this.name = n;
      this.age = age;
    }
  
    public information(): void {
      console.log(`Name: ${this.name}, Age: ${this.age}`);
      }
      }
    
      let friend1 = new friends("kamalesh", 30,);
      (friend1.information());
      let friend2 = new friends("poovendran", 30,);
      (friend2.information());
      let friend3 = new friends("kamal", 30,);
      (friend3.information());*/

      // example 3

     /* class student {
        studentname: string;
        studentage: number;
        studentcountry: string
        studentstate: string;
        studentid: number;
        studentemail?: string;

        constructor(name: string, age: number, country: string, state: string, id: number, email?: string) {
            this.studentname = name;
            this.studentage = age;
            this.studentcountry = country;
            this.studentstate = state;
            this.studentid = id;
            this.studentemail = email;
        }

        information(): void {
            console.log(`Name: ${this.studentname}, Age: ${this.studentage}, Country: ${this.studentcountry}, State: ${this.studentstate}, Id: ${this.studentid}, Email: ${this.studentemail}`);

            if (this.studentemail===undefined)
            {
                console.log("Email is not available");
            }
            else
            {
                console.log("Email is available");
            
        }

    }
    }

    let student1 = new student("kamalesh", 30, "india", "tamilnadu", 123456);
    student1.information();*/


    // example 4

    /*class employee {
        empage: number;
        empaddress: string;
        empid: number;
        empemail?: string;
        empname?: string;

        constructor( Age: number, address: string, id: number, email?: string,name?: string) {
            this.empage = Age;
            this.empaddress = address;
            this.empid = id;
            this.empemail = email;
            this.empname = name;
        }

        information(): void {
            console.log(` Age: ${this.empage}, Address: ${this.empaddress}, Id: ${this.empid}`);

                if(true){
                    if (this.empemail===undefined )
            {

                console.log("Email is not available");

                }
                else{
                    console.log(this.empemail)
                }
                }

                if(this.empname===undefined)
                    {
                        console.log("Name is not available");
                    }
                    else
                    {
                        console.log(this.empname);
                    }
        }
        
    }

    let employee1 = new employee(30 ,"india", 123456,"kamalesh.gmail.com");
    employee1.information();*/

    
      
        