const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();


app.use(bodyParser.urlencoded({ extended: true }));


app.get("/", function (req, res) {

    res.sendFile(__dirname + "/index.html");

    app.post("/", function (req, res) {
        const lat = req.body.lat;
        const lon = req.body.lon;
        const apiKey = "13d06f44349d2545acb143c3496b2378";
        const url = "https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&appid=" + apiKey;
        https.get(url, function (response) {
            response.on("data", function (data) {
                const weatherData = JSON.parse(data);
                const temperature = weatherData.main.temp;
                const weatherDescription = weatherData.weather[0].description;
                const icon = weatherData.weather[0].icon;
                const imageURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
                res.send(`
                <h1>${weatherDescription}</h1>
                <h3>${temperature}</h3>
                <img src="${imageURL}" alt="Weather Icon">
                `);
            });
        });
    });
});

app.listen(3000);