// let fname = "Sohail";
// let age = 21;
// let isMarried = false;

// if(isMarried){
//     console.log("This person's name is " + fname + "and age is "+ age+", and is married")
// }else{
//     console.log("This person's name is " + fname + "and age is "+ age+", and is not married")
// }


// let sum = 0;
// for(let i = 0; i<=1000; i++){
//     sum = sum +i;
// }
// console.log(sum)

// const ages = [21,22,23,24,25,26];
// for(let i = 0; i< ages.length; i++ ){
//     if(ages[i]%2==0){
//         console.log(ages[i])
//     }
// }

// const employees = [["Sohail","male"],["Kashish","female"],["Akash","male"]];
// const emp = [{"name": "Sohail", "gender":"male"},{"name": "Kashish", "gender":"female"},{"name": "Aaki", "gender":"male"}]
// // console.log(employees[0][1]);
// for(let i = 0; i< emp.length;i++){
//     if(emp[i]["gender"] === "male"){
//         console.log(emp[i]["name"]);
//     }
// }




// function sum(num1, num2, funcCall) {
//     let result = num1 + num2;
//     funcCall(result)
// }

// function displayResult(data) {
//     console.log("Result of the sum is : " + data);
// }

// function displayResultPassive(data) {
//     console.log("Sum's result is : " + data);
// }

// // You are only allowed to call one function after this
// // How will you displayResult of a sum

// const result = sum(1,2,displayResult)

// function calc(a,b,funcname){
//     const ans = funcname(a,b);
//     return ans;
// }

// function sum(a,b){
//     console.log("Sum: " + (a+b));
//     return a+b;
// }
// setTimeout(calc, 3*1000,2,5,sum)

// const result = setTimeout(calc(2,5,sum),3*1000)
// console.log(result)

// function greet(){
//     console.log("Hello Guys!!");
// }

// setTimeout(greet, 5*1000);


const test = () => {
    try{
        throw new Error("This is an error");
    }catch(err){
        return "Inside catch block"
    }finally{
        return "Inside finally block"
    }
}

let res = test();
console.log(res)