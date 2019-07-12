import React from 'react';
import '../vitals_styles.scss';

const SoilMoisture = (props) => (
    <div className={'soil_moisture'}>

    <h1 className={'vitals_header'}>SOIL MOISTURE</h1>
        <h1 className={'moisture_number'}>{props.MoistureNumber}</h1>



    </div>
);

export default SoilMoisture;