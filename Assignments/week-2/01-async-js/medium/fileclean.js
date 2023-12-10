const fs = require("fs");

fs.readFile("random.txt", "utf-8", function(err, data){
    console.log("Initial data: " + data);
    data.trim;
    console.log("new data : " + data)
    fs.write("random.txt", newData, function(err, lemon){
        console.log("Updated!");
    });
})