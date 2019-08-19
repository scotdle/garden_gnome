require('dotenv').config();
const fetch = require('node-fetch');
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;


// console.log that your server is up and running
app.listen(port, () => console.log(`Server started...Listening on port ${port}`));

// create a GET route
app.get('/express_backend', (req, res) => {
    res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});

app.get('/getDarkSkyData', (req, res) => {
    const darkSkyEndpoint = "https://api.darksky.net/forecast/";
    const darkSkyKey = process.env.DARK_SKY_KEY;
    const charlotteCoordinates = "/35.2271, -80.8431";
    const darkSkyURL = darkSkyEndpoint + darkSkyKey + charlotteCoordinates;

    fetch(darkSkyURL)
        .then(response => response.json())
        .then(DarkSkyData => {

            res.send({DarkSkyData});

        })
});