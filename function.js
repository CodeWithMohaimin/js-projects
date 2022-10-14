// Function --chapter eight


function functionName() {
     console.log('hello world')//This is siple function
}
 
function add() {
     let a = 10;
     let b = 20;
     console.log(a + b);
}
add()

function helloWorld() {
     console.log('hello WOrld')
}
helloWorld()


for (let i = 0; i <= 10; i++){
     helloWorld() // 10 time print hello world
}


// Sum of arrays

let arr1 = [5, 6, 4, 2];
let arr2 = [5, 6, 4, 3];
let arr3 = [5, 6, 4, 6];

let sum1 = 0;
for (let i = 0; i < arr1.length; i++){
    sum1 += arr1[i];
    
}console.log(sum1);
    //another sum
let sum2 = 0;
for (let i = 0; i < arr2.length; i++){
    sum2 += arr2[i];
    
}console.log(sum2);
    //another sum
let sum3 = 0;
for (let i = 0; i < arr3.length; i++){
    sum3 += arr3[i];
    
} console.log(sum3);



function sumOfArray(arr) {
    let sum = 0;
        for (let i = 0; i < arr.length; i++){
        sum += arr[i];
        
        } console.log(sum);
    
    }
    sumOfArray(arr1)
    sumOfArray(arr2)
    sumOfArray(arr3)


// ==========let's tru again==========//

let arr4 = [5, 6, 4, 2];
let arr5 = [5, 6, 4, 3];
let arr6 = [5, 6, 4, 6];

let result = 0;
for (let i = 0; i < arr1.length; i++){
    result += arr1[i];
} console.log(result);


let result2 = 0;
for (let i = 0; i < arr2.length; i++){
    result2 += arr2[i];
} console.log(result2);


let result3 = 0;
for (let i = 0; i < arr3.length; i++){
    result3 += arr3[i];
} console.log(result3);


function addToArray(arr) {
    let sum = 0;
    for (var i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    console.log(sum);
    
}
addToArray(arr1)
addToArray(arr2)
addToArray(arr3)



// ============== Return Keyword ============//

// after using return keyword, next all code will not execute//

function ret() {
    let i = 10;
    return ret();
    ret()   //not execute
    console.log(i);  //not execute

}




// ============== Expression ============//

let addition = function(a,b) {
    return a + b;
}
addition(10, 15);

//deal function

setTimeout(function () {
    console.log('programmer');
    
}, 2000)

var another = addition;
console.log(another(7,8));


// Greetings ======== Inner Function=========//

function programmer() {
    function hi() {
        console.log('hello');
        for (var i = 0; i < 2;i++){
            console.log('go');
            
        }
    }
    return hi();
}
programmer();

var v = programmer();
console.log(v);


function something(greet, name) {
    function getFirstName() {
        if (name) {
            return name.split(' ')[0]
        } else {
            return ' '
        }
    }
    let message = greet + ' ' + getFirstName();
    console.log(message);
}
something('good Morning', 'programmer islam') //first name calling



function something(greet, name) {
    function getFirstName() {
        if (name) {
            return name.split(' ')[0]
        }
    }
    let message = greet + ' ' + getFirstName();
    console.log(message);
    
}
something('Good night', 'programmer islam')  
