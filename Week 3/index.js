// const express = require("express");
// const app = express();

// app.get("/health-checkup", (req, res) => {
//     const username = req.headers.username;
//     const password = req.headers.password;
//     const kidneyId = req.query.kidneyId;
//     if(username === "sohail" && password === "pass"){
//         res.status(400).json({"msg": "Somethings up with yuor inputs"})
//         return
//     }
//     if(username === "sohail" && password === "pass"){
//         if(kidneyId == 1 || kidneyId == 2){
//             res.json({msg: "your kidney is fine!"})
//         }
//     }
// });

const express = require("express");

const app = express();

app.get("/health-checkup", function (req, res) {
  const username = req.headers.username;
  const password = req.headers.password;
  const kidneyId = req.query.kidneyId;

  if (username != "sohail" || password != "pass") {
    res.status(400).json({"msg": "Somethings up with your inputs"})
    return //control will not be given to the next one if this returns and will directly show the above msg and stop.
  }

  if (kidneyId != 1 && kidneyId != 2) {
    res.status(400).json({"msg": "Somethings up with your ionputs"})
    return
  }
  // do something with kidney here
  res.json({
    msg: "Your kidney is fine!"
  })

  
});

app.listen(3000);