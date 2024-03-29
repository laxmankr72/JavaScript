//singleton - when we use constructor then we have give singleton object and when use litrals then singleton are not create
//for example - object.create

// object literals

const mysym = Symbol("key1");

const student ={
    name: "laxman Kumar",
    [mysym]: "mykey1",
    age: 20,
    location: "ranchi",
    email:"laxmantelo@gamil.com"
}

//access the object

console.log(student.email);
console.log(student["email"]); // prefer this one
console.log(student[mysym]); 

// change the value of object 

student.age = 30;
Object.freeze(student); // after the freeze function we can't change the value
student.age = 35;

console.log(student["age"]);




