const express = require("express");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const jwtPassword = "1902044";
const app = express();

app.use(express.json());

mongoose.connect(
"xyz"
);

const User = mongoose.model("users", {name: String, email: String, password: String});

app.post("/signup", async function (req, res){
    const username = req.body.email;
    const password = req.body.password;
    const name = req.body.name;

    const existUser = await User.findOne({email: username});
    if(existUser){
        return res.status(400).send("Username already exists");
    }

    const user = new User({
        name: name,
        email: username,
        password: password 
    });
    user.save();
    res.json({
        "msg":"User created successfully!"
    });
})



app.listen(3000);
