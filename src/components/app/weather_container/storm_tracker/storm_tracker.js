import React from 'react'
import '../weather_styles.scss'

const StormTracker = (props) => (
    <div className={'storm_tracker'}>
        <h1>STORM TRACKER</h1>

        <h2 className={'rain_percentage'}> {props.rainPercentage}% chance of rain today.</h2>
        <h3 className={'storm_miles'}>there is a storm {props.stormMiles} miles away</h3>

    </div>
);

export default StormTracker;