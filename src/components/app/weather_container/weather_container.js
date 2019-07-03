import React from 'react'
import './weather_styles.scss'
import CurrentConditions from "./current_conditions/current_conditons.js"
import StormTracker from "./storm_tracker/storm_tracker.js"

const WeatherContainer = () => (
    <div className={'weather_container'}>
        <CurrentConditions/>
        <StormTracker/>

    </div>
);

export default WeatherContainer;