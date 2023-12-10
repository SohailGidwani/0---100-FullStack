let count = 0;
function oneSecCounter(){
    console.log(count);
    count++;
}

setInterval(oneSecCounter, 1000)