
const axios = require('axios');


exports.handler = async (event) => {


        const darkSkyEndpoint = "https://api.darksky.net/forecast/";
        const darkSkyKey = process.env.DARK_SKY_KEY;
        const charlotteCoordinates = "/35.2271,-80.8431";
        const exclude = '?flags';
        const darkSkyURL = darkSkyEndpoint + darkSkyKey + charlotteCoordinates + exclude;
        console.log(darkSkyURL);

       const getWeather = await axios.get(darkSkyURL,{}).then(darkSkyResponse => darkSkyResponse.data);
       return {
                    statusCode: 200,
                    body: JSON.stringify({getWeather})
                }



};
