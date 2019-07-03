import React from 'react'
import './vitals_styles.scss'
import PlantHeath from "./plant_health/plant_health.js"
import SoilMoisture from "./soil_moisture/soil_moisture.js"

const VitalsContainer = () => (
    <div className={'vitals_container'}>
<PlantHeath/>
<SoilMoisture/>

    </div>
);

export default VitalsContainer;