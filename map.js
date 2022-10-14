var arr = [1, 2, 3,4,5]

var sqrArr = arr.map(function (value) {
    // return Math.random()*100
    return value * value
})

console.log(arr);
console.log(sqrArr);



function myMap(arr) {
    var newArr = []
    for (var i = 0; i < arr.length; i++){
        var temp = arr[i] * arr[i]
        newArr.push(temp)
    }
    return newArr
}
console.log(myMap(arr));





function myMap(arr,cb) {
    var newArr = []
    for (var i = 0; i < arr.length; i++){
        var temp = cb(arr[i],arr)
        newArr.push(temp)
    }
    return newArr
}

var qb = myMap(arr, function (value) {
    return value * value * value
})



var qba10 = myMap(arr, function (value) {
    return value * 10
})


console.log(qb);
console.log(qba10);
 


// -----------for each function

var arr = [1, 2, 3, 4, 5]


var sum = 0;
arr.forEach(function (value, index, arr) {
    console.log(value,index,arr);
    // sum += value;
    
})
// console.log(sum);

