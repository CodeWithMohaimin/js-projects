


var arr = [1,2,12,3,4,5]

var sum = arr.reduce(function (prev, curr) {
    return prev + curr
    
},10)
console.log(sum);



var maxNum = arr.reduce(function (prev, curr) {
    return Math.max(prev,curr)
})
console.log(maxNum);










let arr = [5, 6, 8, 9, 1, 2, 2, 6, 7, 2,0]

let persons = [
    {
        name: 'A',
        age: 19
    },
    {
        name: 'B',
        age: 21
    },
    {
        name: 'C',
        age: 26
    },
    {
        name: 'D',
        age: 24
    }
]
console.log(arr);
arr.sort()
console.log(arr);   //by default ascending order= small -- large number

console.log(persons);
persons.sort()
console.log(persons);   //there is no changing


arr.sort(function (a,b) {
    if (a > b) {
        return -1
    } else if (a < b) {
        return 1
    } else {
        return 0
    }
})
 
console.log(arr);

persons.sort(function (a, b) {
    if (a.age > b.age) {
        return 1
    } else if (a.age < b.age) {
        return -1
    } else {
        return 0
    }
})

console.log(persons);









// Every method ================
let res1 = arr.every(function (value) {
    return value % 2 === 0
})
console.log(res1);
 
let res2 = arr.every(function (value) {
    return value >=0
})
console.log(res2);

 

// ============ some method============//

let res3 = arr.some(function (value) {
    return value % 2 === 0
})
console.log(res3);
 
let res4 = arr.some(function (value) {
    return value >=0
})
console.log(res4);
