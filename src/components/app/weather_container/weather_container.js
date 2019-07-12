import React from 'react'
import './weather_styles.scss'
import CurrentConditions from "./current_conditions/current_conditons.js"
import StormTracker from "./storm_tracker/storm_tracker.js"


class WeatherContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          weatherMessage: "",
            currentTemp: 70,
            currentHumidity: 0,
            precipProbability: 0,
            nearestStormDistance: 100
        };

        this.stormTracker();
    }

   async stormTracker() {
        const response = await fetch('/getDarkSkyData');
        const DarkSky = await response.json();
        const currently = DarkSky.DarkSkyData.currently;
        let rainPercentage = currently.precipProbability;
        const stormMiles = currently.nearestStormDistance;

        rainPercentage = (rainPercentage * 100).toFixed(0);
        console.log(DarkSky);
        console.log(currently);
        console.log(stormMiles);
        this.setState({
            precipProbability: rainPercentage,
            nearestStormDistance: stormMiles
        });


        if (response.status !== 200) {
            throw Error(DarkSky.message)
        }
        return DarkSky;
    };


    render() {
        return(
            <div className={'weather_container'}>
                <CurrentConditions
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