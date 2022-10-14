//  filter callback function
 
var arr = [5, 6, 8, 9, 3, 2, 7, 3, 1]

var flt = arr.filter(function (value) {
    return value < 5
    
})
console.log(flt);


function myFilter(arr) {

    var newArr = []
    for (var i = 0; i < arr.length; i++){
        if (arr[i] % 2 === 0) {
            newArr.push(arr[i])
        }
    }
    return newArr
}
console.log(myFilter(arr));





function myFilter(arr, cb) {

    var newArr = []
    for (var i = 0; i < arr.length; i++){
        if (cb(arr[i],i,arr)) {
            newArr.push(arr[i])
        }
    }
    return newArr
}
console.log(myFilter(arr, function (value) {
    return value % 2 === 0
    
})); 

console.log(myFilter(arr, function (value) {
    return value % 2 === 1
    
}));