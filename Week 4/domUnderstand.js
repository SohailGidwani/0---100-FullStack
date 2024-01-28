function logFirstNum(){
    const element = document.getElementById("finalSum");
    const num1 = document.getElementById("firstNum").value;
    const num2 = document.getElementById("secondNum").value;
    fetch('http://localhost:3000/sum?a='+num1+'&b='+num2)
    .then(function(response){
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.text();
    })
    .then(function(ans){
        element.innerHTML = "Sum = " + ans;
    })
    .catch(function(error){
        console.error('There has been a problem with your fetch operation:', error);
        element.innerHTML = "Error: " + error.message;
    });
}

async function populateDiv2() {
    const a = document.getElementById("firstNum").value;
    const b = document.getElementById("secondNum").value;
    
    const response = await fetch("http://localhost:3000/sum?a=" + a + "&b=" + b)
    const ans = await response.text();
    document.getElementById("finalSum").innerHTML = ans;
}
