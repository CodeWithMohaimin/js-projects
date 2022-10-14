
//--------traverse array--------//

let array1 = [10, 21, 35, 48, 62, 20];
for (let i = 0; i < array.length; i++){
    console.log(array1[i]);

}


let array2 = [10, 21, 35, 48, 62, 20];
for (let i = 0; i < array.length ; i++){
    array[i] = array[i] + 2;
}
console.log(array2);



// sum all the array elements
let sum = 0;
for (let i = 0; i < array.length; i++){
    sum += array[i];
} console.log(sum);


// another logic
var g = 0;
for (var i = 0; i < array.length; i++){
    g += array[i]
} console.log(g)


for (var i = 0; i < array.length; i++){
    if (array.length % 2 === 1) {
        console.log(array[1]);
    }
}






//clue -> Traverse
let array = [1, 2, 3, 4, 5];

let empty = 0;
for (let i = 0; i < array.length; i++){
    empty = empty + array[i];
   
} console.log(empty)


for (let i = 0; i < array.length; i++){
    if (array[i] % 2 === 1) {
        let oddNum = array[i];
        oddNum += array[i]
        console.log(oddNum)

    }
}
