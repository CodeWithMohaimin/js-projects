
///========== J a v a S c r i p t  ===========///
//01. ForEach method or Function
//02. Spread Operator

///========== ForEach ===========///
forEach(function(value , index, arr){

})
forEach((value, index, arr) => {
    
})
///========== Spread Operator ===========///
//convert obj to Array by using ...object = Array



//Traversing Dom

let listItem = document.getElementsByTagName('li');

let listItemArr = [...listItem]

listItemArr.forEach((li, num) => {
    let text = li.innerHTML
    li.innerHTML = `(${num + 1}) ${text}`
})

let line = document.getElementsByTagName('li');

let lineArr = [...line]

lineArr.forEach((li, index) => {
    let text = li.innerHTML
    li.innerText = `(${index + 1}) ${text}`
})