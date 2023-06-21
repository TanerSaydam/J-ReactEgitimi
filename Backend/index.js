const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

let customers = [    
    {
        name: "Taner Saydam",
        profession: "Yazılım",
        age: 33
    }
    ,
    {
        name: "Taner Saydam",
        profession: "Yazılım",
        age: 33
    }
    ,
    {
        name: "Taner Saydam",
        profession: "Yazılım",
        age: 33
    }
]

app.get("/", (req, res)=> {
    res.json(customers)
});

app.listen(5000);