const fs = require("fs");

fs.readFile("random.txt", "utf-8",function(err, data){
    console.log(data);
})
for(let j = 0; j < 10; j++){
    console.log("This is J loop : " + j);
}

for(let i = 0; i < 10; i++){
    setTimeout(function(){
        console.log(i);
    }, 1000)

}