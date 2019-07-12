import React from 'react'
import '../weather_styles.scss'

const CurrentConditions = (props) => (
    <div className={'current_conditions'}>
        <h1>CURRENT CONDITIONS</h1>
        <h4>{props.weatherMessage}</h4>
        <div className={'currentTemp'}>
        <h2>{props.currentTemp}</h2><h2>{props.currentHumidity}</h2>
    </div>

    </div>
);

export default CurrentConditions;