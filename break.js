//Break Statement

// while(true){
//     let rand = Math.floor(Math.random() * 10 +1)
//     if (rand === 9) {
//         console.log('winner')
//         break
//     }else{
//         console.log('you got ' + rand)
//     }
// }


for (let i = 1; i <= 10; i++){
    if (i % 5 === 0) {
        break 
    } else {
        console.log(i)
    }
}