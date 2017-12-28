import * as React from 'react';
import {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component<{weather:any}, {}> {
    constructor(props) {
      super(props);
      
    }
    
    renderError(): any {
        <td colSpan={4}>Requested city not found. Please try again.</td>
    }

renderWeather(cityData) {
    const temps = cityData.list.map(weather=> weather.main.temp-273);
    const pressures = cityData.list.map(weather => weather.main.pressure);
    const humidities = cityData.list.map(weather => weather.main.humidity);
    const {lon, lat} = cityData.city.coord;

    return (
        <tr key={cityData.city.name} >
            <td> <GoogleMap lon={lon} lat={lat} /></td>
            <td><Chart data={temps} color="orange" units="C"/></td>
            <td ><Chart data={pressures} color="blue" units="hPa"/></td>
            <td><Chart data={humidities} color="green" units="%"/></td>

        </tr>
    );
}

    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature (C)</th>
                        <th>Preasure (hPa)</th>
                        <th>Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.length>0 ?                         
                        this.props.weather.map(this.renderWeather)
                        : this.renderError()
                }
                </tbody>
            </table>
        );
    }
}


function mapStateToProps({weather}) {
    return {weather}
}

export default connect(mapStateToProps)(WeatherList)