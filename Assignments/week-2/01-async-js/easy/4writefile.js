const fs = require("fs");

fs. readFile("random.txt", "utf-8", function(err, data){
    console.log(data);
    data = data + "\nSohail wrote this for you!"
    fs.writeFile("random.txt",data, function(err, data){
        console.log("Hellooooooooooo!")
    });
    console.log("data : " + data);
})