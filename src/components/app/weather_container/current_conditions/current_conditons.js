import React from 'react'
import '../weather_styles.scss'



const CurrentConditions = (props) => (
    <div className={'current_conditions'} style={{backgroundImage: `url(${props.backgroundImage})`}}>
        <h1>CURRENT CONDITIONS</h1>
        <div className={'weather_message'}>
        <p>{props.weatherMessage}</p>
    </div>
        <div className={'current_temp'}>
        <h2>{props.currentTemp}<span>&#176;</span></h2> / <h2 className={'current_humidity'}>{props.currentHumidity}%</h2>
    </div>

    </div>
);

export default CurrentConditions;