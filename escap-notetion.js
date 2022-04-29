// string is most useful statement in javascript
//another string methods
// var str = 'This is a string'// String literal or way
// console.log(str);
// //another string methods
// var n = 100;
// var goString = n + ''
// console.log(goString)

// //another string methods
// var n = 100;
// var goString = n.toString()
// console.log(goString)

// //another string methods
// var n = 12;
// var str2 = String(n) //string Constructor
// console.log(str2);



//Escape Notation
// var st1 = 'this is a \\string'
// console.log(st1)
// //Another Escape Notation
// var st2 ="this is a \'string\'"
// console.log(st2)
// //Another Escape Notation
// var st3 ="this is a \'string'"
// console.log(st3)
// //Another Escape Notation
// var st4 ="this is a \n new line string"
// console.log(st4)
// //Another Escape Notation 1 tab generator
// var st5 ="this is a \t tab string"
// console.log(st5)
// //Another Escape Notation 1 Vertical tab generator
// var st6 ="this is a \v one vertical line string"
// console.log(st6)






// string comparison;
//JavaScript uses lexicographical system to compare to a string;
//z > Z = true;
//a > Z = true;
//all capital letter is greater tan all small letter;



// console.log('001' == 1) = true;
// when compare a string, it convert to a number;


//string related methods,functions;

var a = 'I am'
var b =' '+'Programmer Moh'

var c = a.concat(b); //concat method
console.log(c)
var d = c.substring(5); //substring method
console.log(d);

console.log(c.substr(5, 3)); //substring method

console.log(c.charAt(0)) //chartArt method

console.log(c.startsWith('I'))

console.log(c.endsWith('h'))

console.log(b.toLocaleLowerCase())
console.log(b.toUpperCase())

console.log('        logic      '.trim()) //space remove method;

console.log(c.split(' '))


//length knowing on other way
let str = 'programmer-moh';
let length = 0;

while (true) {
    if (str.charAt(length) == '') {
        break
    } else {
        length++
    }
}
console.log(length)
console.log(str.length)