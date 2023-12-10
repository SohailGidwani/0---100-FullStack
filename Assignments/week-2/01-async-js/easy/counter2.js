let count = 0;

function updateCount(){
    console.log(count);
    count++;
    // Doing recursion on the step below that calls the same function after every one sec
    setTimeout(updateCount, 1000)
}

updateCount()