import React from 'react';

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
    render() {
     return (
         <div className="weather">

         </div>
     )
    }
}

export default Weather;