const express = require("express");

const app = express();
app.use(express.json());

app.post("/health-checkup", function (req, res) {
// do something with kidney here
const kidneys = req.body.kidneys;
const kidneyLength = kidneys.length;

res.send("Your have " + kidneyLength  + " Kidneys");
});
// global error catches
app.use(function(err, req, res, next){
    res.json({
        msg : "Sorry something is wrong with our server!"
    })
});
// ^ error handling middle-ware
app.listen(3000);