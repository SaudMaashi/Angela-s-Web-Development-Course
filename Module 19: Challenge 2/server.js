const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmiCalculator.html", function (req, res) {
    var weight = parseInt(req.body.weight);
    var height = parseInt(req.body.height);
    var bmi = weight / (height * height);
    res.send("Your BMI is " + bmi);
});

app.listen(3000);

