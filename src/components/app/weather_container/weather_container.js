import React from 'react'
import './weather_styles.scss'
import CurrentConditions from "./current_conditions/current_conditons.js"
import StormTracker from "./storm_tracker/storm_tracker.js"
import morningImage from "../../../assets/images/time_of_day_gradients/morning.jpg"
import middayImage from "../../../assets/images/time_of_day_gradients/midday.jpg"
import nighttimeImage from "../../../assets/images/time_of_day_gradients/nighttime.jpg"




class WeatherContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          weatherMessage: "it's a beautiful morning!",
            backgroundImage: "",
            currentTemp: 70,
            currentHumidity: 0,
            precipProbability: 0,
            nearestStormDistance: 100
        };
    }
    componentDidMount() {
        this.stormTracker()
        this.getTime()
    }


    async stormTracker() {
        const response = await fetch('http://localhost:8888/.netlify/functions/api_functions');
        const DarkSky = await response.json();
        console.log(DarkSky);


        const currently = DarkSky.getWeather.currently;
       const daily = DarkSky.getWeather.daily.data[0];

       let tempRightNow = currently.apparentTemperature;
       let humidityRightNow = currently.humidity;
       let rainPercentage = daily.precipProbability;
        const stormMiles = currently.nearestStormDistance;

        rainPercentage = (rainPercentage * 100).toFixed(0);
        tempRightNow =    Math.round(tempRightNow);
        humidityRightNow = (humidityRightNow * 100).toFixed(0);

        console.log(currently);
        console.log(stormMiles);
        this.setState({
            currentTemp: tempRightNow,
            currentHumidity: humidityRightNow,
            precipProbability: rainPercentage,
            nearestStormDistance: stormMiles

        });


        if (response.status !== 200) {
            throw Error(DarkSky.message)
        }
        return DarkSky;
    };

    async getTime (){

const today = new Date();
let hours = today.getHours();

    if(hours < 12) {
    this.setState({

        weatherMessage: "good morning scooter!",
        backgroundImage: morningImage,

    })

}
    else if (hours < 18 ) {

        this.setState({

            weatherMessage: "good afternoon scooter!",
            backgroundImage: middayImage

        })

    }

    else {
        this.setState({

            weatherMessage: "good night scooter!",
            backgroundImage: nighttimeImage

        })


    }

    }



    render() {
        return(
            <div className={'weather_container'}>
                <CurrentConditions
                    backgroundImage ={this.state.backgroundImage}
                    weatherMessage={this.state.weatherMessage}
                    currentTemp={this.state.currentTemp}
                    currentHumidity={this.state.currentHumidity}
                />
                <StormTracker rainPercentage={this.state.precipProbability}
                              stormMiles={this.state.nearestStormDistance}
                />

            </div>
        )
    }

}

export default WeatherContainer;