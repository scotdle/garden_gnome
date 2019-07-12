import React from 'react'
import './vitals_styles.scss'
import PlantHeath from "./plant_health/plant_health.js"
import SoilMoisture from "./soil_moisture/soil_moisture.js"


class VitalsContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            soilMoisture: "500",
            LeafColor: "#50AD80",
            WaterIndicator: 'DOES NOT',
        };

        this.randomNumber();


    }

    randomNumber(){
        /*setInterval(function(){
            let randomMoisture = (Math.floor((Math.random()*1030)+1));
            this.setState({soilMoisture: randomMoisture});


            if(this.state.soilMoisture < 500) {

                this.setState({LeafColor: 'red'});
                this.setState({WaterIndicator: 'DOES'})
            }
            else {
                this.setState({LeafColor: '#50AD80'});
                this.setState({WaterIndicator: 'DOES NOT'})


            }

        }.bind(this), 1000); */
}
    render() {
      return  (
          <div className={'vitals_container'}>
            <PlantHeath LeafColor={this.state.LeafColor} WaterIndicator={this.state.WaterIndicator}/>
            <SoilMoisture MoistureNumber={this.state.soilMoisture}/>

        </div>
      )
    }
}
export default VitalsContainer;