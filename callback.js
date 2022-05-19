//map function

let arr = [1, 2, 3,4]

// var myArr = arr.map(function (value) {
//     return value*value
// })
// console.log(arr);
// console.log(myArr);


function myMap(arr,cb) {
    var newArr = []
    for (var i = 0; i < arr.length; i++){
        var temp = cb(arr[i])
        newArr.push(temp)
    }
    return newArr
    
}

// console.log(myMap(arr));

var qub = myMap(arr, function(value){
    return value * value * value
    
})

console.log(qub);


var ten = myMap(arr, function (value) {
    return value * 10
    
})
console.log(ten);

