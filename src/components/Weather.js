import React from 'react';
import Form from "./Form";
import Result from "./Result";
const config = require('../config.json');

class Weather extends React.Component {
 state = {
        value: '',
        date: '',
        city: '',
        sunrise: '',
        sunset: '',
        temp: '',
        wind: '',
        pressure: '',
        country: '',
        err: false
    };
 handleInputChange = (e) => {
        this.setState({
            value : e.target.value
        })
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevState.value !== this.state.value) {
            const API = `https://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&APPID=${config.APIKey}&units=metric`
            fetch(API).then(response => {
                if(response.ok) {
                    return response
                }
                throw Error("Error")
            }).then(response => response.json())
                .then(data => {
                    const dateTime = new Date().toLocaleString()
                    this.setState({
                        err: false,
                        date: dateTime,
                        city: data.name,
                        sunrise: data.sys.sunrise,
                        sunset: data.sys.sunset,
                        temp: data.main.temp,
                        wind: data.wind.speed,
                        pressure: data.main.pressure,
                        country: data.sys.country
                    })
                })
                .catch(err => {
                    console.log(err)
                    this.setState(state => ({
                        err: true,
                        city: this.state.value
                    }))
                })
        }
    }
    render() {
     return (
         <div className="weather">
            <Form value={this.state.value} change={this.handleInputChange}/>
            <Result weather={this.state} />
         </div>
     )
    }
}

export default Weather;