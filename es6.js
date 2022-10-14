// var i = `           kdjfbju
//                             fjkjdfdiofjio
//                     djfujgio`

// console.log(i.trim); //that is Es6
                    
//============template string===============//
// var age = 19;
// var names = 'Programmer Mohaimin'

// console.log('My name is '+ names + ' And my age is '+ age);
// console.log(`My name is ${names} And I am ${age} years old. I am ${age < 18 ? 'not ': ''} adult`);

// console.log(names.padStart(40));
// console.log(names.padEnd(50,'a'));


// console.log('s'.repeat(20));


//============ Var , let , const===============//
//============ var, let = changeable
//============ const = not changeable


// const i = 100;
// i = 10;
// console.log(i); // this is a error


// let i = 100;
// i = 10;
// console.log(i);  // code is ok


// var i = 100;
// i = 10;
// console.log(i);  // code is ok


// if (true) {
//     var a = 10;
// }
// console.log(a);  // this is execute properly ok When we use var.


// if (true) {
//     var a = 10;
// }
// console.log(a);   // When We use let then ---> Uncaught ReferenceError: i is not defined.




// for (var i = 0; i < 5; i++){

// }
// console.log(i);  // this is execute properly ok When we use var.


// for (let i = 0; i < 5; i++){
//     // console.log(i);
// }
// console.log(i); // When We use let then ---> Uncaught ReferenceError: i is not defined.





// {
//     var i = 10;
// }
// console.log(i);// this is execute properly ok When we use var.




// {
//     let i = 10;
// }
// console.log(i); // When We use let then ---> Uncaught ReferenceError: i is not defined.


// when we want a block we use function but now Es6 we use let keyword
