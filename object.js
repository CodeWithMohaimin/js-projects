
// let obj = {

// }
// console.log(typeof obj)


//What is object in javascript ?
//= Javascript Object is define multi details objects


let num2 = {
    a: 1,
    b: 2
};
console.log(num2);

let num = {
    a: 1,
    b: 2
};      //declare a object literal

num.c = 4;

console.log(num);



// Declare a Object COnstructor
let Constructor = Object()
Constructor.a = 4;
// console.log(Constructor) //Constructor Notation
// new
let obj2 = new Object();
obj2.v = 3;
obj2['y'] = 199;//Array notation

let m = 'g'
obj2[m] = 99 // Object Notation
// console.log(obj2)

delete obj2.y;
console.log(obj2)

let obj3 = {
    a: 10,
    b: 20
}
let obj2 = {
    a: 10,
    b: 20
}
console.log(obj.a === obj.b);

if (obj.a === obj2.a && obj.b === obj2.b){
    console.log(true);
} else {
    console.log(false)
}


console.log(JSON.stringify(obj) === JSON.stringify(obj2));

 

Iterate/Traverse//
let obj = {
    a: 10,
    b: 20,
    c: 30
}
console.log('b' in obj);

for (let i in obj) {
    console.log(i);
    console.log(i +' = '+ obj[i])
}


