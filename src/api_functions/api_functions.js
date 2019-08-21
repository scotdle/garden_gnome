
const axios = require('axios');


exports.handler = async (event) => {


        const darkSkyEndpoint = "https://api.darksky.net/forecast/";
        const darkSkyKey = '37599ff56bd41dca1fb2c2ffc39c977e';
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
