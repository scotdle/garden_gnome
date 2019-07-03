import React from 'react';
import './App.scss';
import VitalsContainer from "./vitals_container/vitals_container.js"
import WeatherContainer from "./weather_container/weather_container.js"
import NavBar from "./navbar/navbar"

function App() {
  return (
<div className={'grid_container'}>
<NavBar/>
<div className={'monitor_container'}>
  <VitalsContainer/>
  <WeatherContainer/>


</div>
</div>
  );
}

export default App;
