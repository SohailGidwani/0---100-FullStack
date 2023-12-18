// -----------------------------------Arrow Function----------------------------------------------
// const sum = (a,b) =>{
//     return a+b;
// }

// console.log(sum(5, 10));

// ---------------------------------map function---------------------------------------------------
const input = [1,2,3,4,5];

// const transform = (i) =>{
//     return i*2;
// }

// console.log(input.map(transform));

// --------------------------------Filter function------------------------------------------------
// Filter all even elements from a given array
console.log(input.filter(function(n){
    if(n%2 == 0){
        return true;
    }else{
        return false;
    }
}))