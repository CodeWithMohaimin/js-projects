//higher order function 2 part
//= 01 - callback
//=02 - return

function greet(msg) {
    function greetings(name) {
        return msg + ',' + name + '!'
    }
    return greetings
}
var gm = greet('good morning')
console.log(gm('programmer'));

var gm = greet('Good Morning')
console.log(gm('programmer'));


var gn = greet('Gon n8')
console.log(gn('programmer'));








// composition Function=======

function pri(inp) {
    console.log(inp);
    
}

function multiply(n) {
    return n * 5
}

function add(a, b) {
    return a + b
    
}

pri(multiply(add(5,3)))



//======function expression=======//

var add = function(a, b) {
    return a+b
}

console.log(add(2,3));


var programmer = add;
console.log(programmer(1, 2))



var ham = programmer
console.log(ham(1,6));



//=========inner==============//

function some(greet, name) {
    function sayHi() {
        console.log(greet + name);
         
    }
 sayHi()
}
some('hello', 'programmer')

//---------get first name---------//

function some(greet, name) {
    function getFirstName() {
        if (name) {
            return name.split(' ')[0]
        } else {
            return 'MD'
        }
    }
    var message = greet +' '+ getFirstName()
    console.log(message);
    
}
some('hello')