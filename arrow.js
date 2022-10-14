//=> Arrow Function

function add(a, b) {
    return a + b;   //This is a simple Function declaration
}

let add = (a, b) => {
    return a + b;  //This is a Arrow Function
}


//* When we write  1 line code then write that way
let add = (a, b) => a + b;
console.log(add(10,20));


// * When we write  1 line code 1 mathematical concept then write that way

let into = (x) => x * x;
console.log(into(5));

    // => We don't assign like this way 

    () => {
        console.log(`we don't use this way`);
        
    }
    
    
function testMe() {
    console.log(this); //return window object
}
testMe()



let obj1 = {
    names: 'mohaimin',
    prints: function(){
        console.log(this); //  return our object when use random function
        
    }
}
obj1.prints() 
    
let obj = {
    names: 'mohaimin',
    prints: () => {
        console.log(this);//return window object when use => arrow function
        
    }
}
obj.prints()



// Here no solution code not working ====|>
let obj2 = {
    names: 'programmer mohaimin',
    print: function () {
        
        setTimeout(function () {
            // console.log(`Hello ${this.names}`);
            alert(`Hello, ${this.names}`)
            
        },3000)
    }
}
obj.print()




// Here is a solution we create a variable and change this to variable name ====|>|>
let obj3 = {
    names: 'programmer mohaimin',
    print: function () {
        let self = this; //Here we create a variable
        setTimeout(function () {
            // console.log(`Hello ${this.names}`);
            alert(`Hello, ${self.names}`)
            
        },3000)
    }
}
obj.print()






//Here is an another solution we use  .bind method ====|>|>|>|>

let obj4 = {
    names: 'programmer mohaimin',
    print: function () {
        setTimeout(function () {
            console.log(`Hello ${this.names}`);
            
        }.bind(this))//we create .bind method
    }
}
obj.print()





//Here is an another solution we use =>arrow function====|>|>|>|>

let obj5 = {
    names: 'programmer mohaimin',
    print: function() {
        setTimeout(() => {   // we not use .bind + other method to change values, when we use => arrow function
            console.log(`Hello ${this.names}`);
            
        },1000)
    }
}
obj.print()





//========>|||> Default Parameter <|||<==========//

function sqr(num = 'Programmer Mohaimin') {
    console.log(`${num} ! Hello`);
    
}
sqr()

function greet(names = 'Mohaimin', msg = 'hello') {
    console.log(`${names} ! ${msg}`);
    
}
greet()




//========>|||>Custom Iterable Object  <|||<==========//

