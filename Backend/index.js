const express = require("express");
const app = express();
const cors = require("cors");
const jwt = require("jsonwebtoken");

app.use(cors());
app.use(express.json());

app.get("/", (req, res)=> {
    const payload = {
        name: "Taner Saydam",
        email: "tanersaydam@gmail.com"
    }

    const options = {
        expiresIn: "30d"
    }

    const secretKey = "my secret key my secret key 1324546as."


    let token = jwt.sign(payload,secretKey,options);

    res.json({accessToken: token})
});

app.listen(5000);