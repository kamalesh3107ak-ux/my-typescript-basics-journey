// method overriding - overriding the method of a parent class in a child class
// that is used reuse the code of a parent class in a child class

// same method name 
// same number of parameters
// same return type but different implementation
// only used in inheritence class


// syntax
class car {
    start() {
        console.log("car started");
    }
}
class vehicle extends car {
    start() {
        console.log("vehicle started");
    }
}
class bike extends car {
    start() {
        console.log("bike started");
    }
}

let v1 = new vehicle();
v1.start();

// superkeyword can access the parent class method
// superkeyword can access the constructor
// superkeyword cannot access the parent class variable

let b1 = new bike();
b1.start();

let c1 = new car();
c1.start();

let v2 = new vehicle();
v2.start();
