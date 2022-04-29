//Nested loop in JavaScript

// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5


//This code is true

let n = '10';
for (let i = 1; i <= n; i++) {
	let result = '';
	for (let j = 1; j <= i; j++) result += j + ' ';
	console.log(result);
}



//Another code 
let g = 5 
for (i = 1; i <= g; i++){
	let result = ''
	for (let j = 1; j <= g; j++){
		result += '* '
	}
	console.log(result)

}





 