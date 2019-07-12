import React from 'react'
import '../vitals_styles.scss'
import LeafIndicator from './plant_health_svg/planthealthleaf'





const PlantHealth = (props) => (
    <div className={'plant_health'}>
        <h1 style={props.WaterIndicator === 'DOES' ? {color: 'red'} : {color: '#50AD80'} }>PLANT HEALTH</h1>
<LeafIndicator fill={props.LeafColor}/>
<h2 style={props.WaterIndicator === 'DOES' ? {color: 'red'} : {color: '#50AD80'} } className={'water_indicator'}>PLANT {props.WaterIndicator} NEED WATER.</h2>


    </div>
);

export default PlantHealth;