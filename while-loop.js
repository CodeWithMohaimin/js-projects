// While loop concepts

// var number = true;

// while (number < 10) {
//     console.log(number)
//     number++
// }


let isRunning = true
while(isRunning){
    let rand = Math.floor(Math.random() * 10 +1)
    if (rand === 9) {
        console.log('winner')
        isRunning = false;
    }else{
        console.log('you got' + rand)
    }
}