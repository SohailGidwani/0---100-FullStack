const fs = require('fs');
const { resolve } = require('path');

// function sohailReadfile(){
//     return new Promise(function(resolve){
//         fs.readFile("a.txt","utf-8", function(err, data){
//             resolve(data);
//         });
//     })
// }

// function onDone(data){
//     console.log(data);
// }
// var prom = sohailReadfile()
// console.log(prom)
// prom.then(onDone) //Async function 
// setTimeout(function(){
//     console.log(prom);
// }, 5000)

function sohailAsyncFunc(){
    let prom = new Promise(function(resolve){
        setTimeout(resolve, 5000)
    });
    return prom;
}

const value = sohailAsyncFunc();
value.then(function(){
    console.log("Hey there! I'm Sohail.")
})

// -------------------- Async Await ------------------------

function sohailAsyncFunc(){
    let prom = new Promise(function(resolve){
        // setTimeout(resolve, 5000)
        setTimeout(function(){
            resolve("Helloooooo")
        }, 5000)
    });
    return prom;
}


async function useSohail(){
    let value = await sohailAsyncFunc()
    console.log(value);
}
useSohail()
console.log("After everything")