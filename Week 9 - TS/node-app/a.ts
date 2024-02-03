// interface User {
// 	firstName: string;
// 	lastName: string;
// 	email?: string;
// 	age: number;
// }
// function isLegal(user : User){
//     if(user.age > 18){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// isLegal({
//     firstName: "Sohail",
//     lastName: "Gidwani",
//     age:21
// })
// interface Person {
//     name: string;
//     age: number;
//     greet(phrase: string): void;
// }

// class Employee implements Person {
//     name: string;
//     age: number;

//     constructor(n: string, a: number) {
//         this.name = n;
//         this.age = a;
//     }

//     greet(phrase: string) {
//         console.log(`${phrase} ${this.name}`);
//     }
// }

// const sohail = new Employee("Sohail", 21);
// console.log(sohail.name);

// ------------------Type----------------------------
// type StringOrNumber = string | number; //Union

// function printId(id: StringOrNumber) {
//   console.log(`ID: ${id}`);
// }

// printId(101); // ID: 101
// printId("202"); // ID: 202

// type Employee = {
//     name: string;
//     startDate: Date;
//   };
  
//   type Manager = {
//     name: string;
//     department: string;
//   };
  
//   type TeamLead = Employee & Manager; //Intersection
  
//   const teamLead: TeamLead = {
//     name: "harkirat",
//     startDate: new Date(),
//     department: "Software developer"
//   };
  
// -------------Arrays------------------------
// type numberArr = number[]
function maxValue(arr: number[]) {
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
        }
    }
    return max;
}

console.log(maxValue([1, 2, 3]));