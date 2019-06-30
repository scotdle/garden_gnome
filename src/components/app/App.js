import React from 'react';
import './App.scss';
import PlantHealth from "./plant_health_container/plant_health/plant_health";
import SoilMoisture from "./plant_health_container/soil_moisture/soil_moisture";
import NavBar from "../navbar/navbar"

function App() {
  return (
<div className='flex_container'>
<NavBar/>
   <PlantHealth/>
   <SoilMoisture/>
</div>
  );
}

export default App;
