// function getAnimalData(){
//     fetch("https://fakerapi.it/api/v1/persons").then(function(res){
//         res.json().then(function(finalData){
//             console.log(finalData);
//         })
//     })
// }

async function getUserData(){
    const res = await fetch("https://fakerapi.it/api/v1/persons");
    const finalData = await res.json();
    console.log(finalData);
    document.getElementById("user-data-container").innerHTML = JSON.stringify(finalData.data);
    // const container = document.getElementById('user-data-container');
    // container.innerHTML = ''; 

    // finalData.data.forEach(item => {
    //     const userDiv = document.createElement('div');
    //     userDiv.innerHTML = `
    //         <p>Name: ${item.firstname} ${item.lastname}</p>
    //         <p>Email: ${item.email}</p>
    //         <p>Phone: ${item.phone}</p>
    //         <p>Birthday: ${item.birthday}</p>
    //         <hr>
    //     `;
    //     container.appendChild(userDiv);
    // });
}