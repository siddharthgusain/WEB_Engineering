// classes was introduced in ECMA 2015
// under the hood these classes are converted to prototypal inheritance model
// Classes are generally used while creating your own Libraries and frameworks or enterprise Web application
// Design patterns are also implmented using classes

// const hoistedObject = new Person(); Referrence Error classes are not hoisted

class Person {

    constructor(nameParam, ageParam) {
        this.name = nameParam;
        this.age = ageParam;
    }

    display() {
        console.log(this);
    }
}

class Teacher extends Person {

    constructor(nameParam, ageParam, subjectParam) {
        super(nameParam, ageParam); // initializing name and age 
        this.subject = subjectParam;
    }

    log() {
        console.log("Hello student");
    }
}

let obj1 = new Teacher("sid", 20, "maths");
let obj2 = new Teacher("Tushar", 30, "Science");

console.log(obj1);
// obj => Teacher => Person => Object
// by default all data members and methods are public in JS classes
// so it means all data members and methods are present inside prototype object


/*
Classes introduce a paradigm, or a way to organize your code. Classes are the foundations of 
object-oriented programming, which is built on concepts like inheritance and polymorphism 
(especially subtype polymorphism). However, many people are philosophically against certain 
OOP practices and don't use classes as a result.

*/