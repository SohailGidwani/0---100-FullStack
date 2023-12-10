const express = require("express");
const bodyParser = require("body-parser");
const port = 3000;
const app =express();

// app.get('/', function (req,res){
//     // let a = 0;
//     // for(let i = 0;i<1000; i++){
//     //     a = a+i;
//     // }
//     // res.send(a)
//     res.send("Hello world!")
// })

app.get('/', (req,res) => {

    res.send("<b>HEY THERE!</b>");
})

app.listen(port, ()=>{
    console.log(`App running on Port ${port}`);
})