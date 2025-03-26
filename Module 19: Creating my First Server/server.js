const express = require("express");
const app = express();

app.get("/", function (req, res) {
    res.send("<h1>Welcome to my website!</h1>");
});

app.get("/contact", function (req, res) {
    res.send("You can contact me at saudm45q@gmail.com");
});

app.get("/about", function (req, res) {
    res.send("I'm Saud Maashi");
});

app.listen(3000, function () {
    console.log("Saud");
});