

const Result = props => {

    const {date, city, sunrise, sunset, temp, pressure, wind, country, err} = props.weather;
    let content = null;
    if (!err && city) {
        const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString();
        const sunsetTime = new Date(sunset * 1000).toLocaleTimeString();
        content = (
            <div>
                <h3>Weather for <span className="city">{city}</span></h3>
                <h3>Country: {country}</h3>
                <h4>Date and time: {date}</h4>
                <h4>Temperature: {temp}&#176;C</h4>
                <h4>Sunrise: {sunriseTime}</h4>
                <h4>Sunset: {sunsetTime}</h4>
                <h4>Wind: {wind}m/s</h4>
                <h4>Pressure: {pressure}hPa</h4>
            </div>
        );
    }
    return (
        <div className="result">
            {err ? `We don't have ${city} in database` : content}
        </div>
    )
}

export default Result;