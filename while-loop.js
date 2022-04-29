// While loop concepts

var number = true;

while (number < 10) {
    console.log(number)
    number++
}


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


function btn(){
    let num = true;
while(num) {
    let randomNum = Math.floor(Math.random() * 10+1)
    if(randomNum === 3){
        console.log('Tamin Winner ' + randomNum)
    }else if(randomNum === 6){
       alert('Tamin Winner Winner ' + randomNum)
    }
    else if(randomNum === 7){
       alert('Tamin Winner ' + randomNum)
    }
    else if(randomNum === 1){
       alert('Mohaimin is Winner  ' + randomNum)
    }
    else if(randomNum === 10){
       alert('Mohaimin is Winner  ' + randomNum)
    }
    else if(randomNum === 8){
       alert('Mohaimin is Winner  ' + randomNum)
    }
    else{
       alert('NO on Winner ' + randomNum)
    } 
    num = false;
}
}