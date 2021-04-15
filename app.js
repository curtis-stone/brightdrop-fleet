const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


app.get("/", function(req, res) {
  res.render("home", {
    vehicles: vehicles,
    });
});

min = Math.ceil(50);
max = Math.floor(100);

let vehicles = [
    {
        name: "Vehicle 1",
        location: "Atlanta", 
        charge: Math.floor(Math.random() * (max - min + 1)) + min

    },
    {
        name: "Vehicle 2",
        location: "Roswell", 
        charge: Math.floor(Math.random() * (max - min + 1)) + min
    },
    {
        name: "Vehicle 3",
        location: "Grayson", 
        charge: Math.floor(Math.random() * (max - min + 1)) + min
    },
]

app.get("/details", function(req, res) {
    res.render("details", {
        vehicles: vehicles,
        });
  });
  


app.listen(3000, function() {
    console.log("Server started on port 3000");
  });
  