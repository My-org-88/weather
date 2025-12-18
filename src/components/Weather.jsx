import {useSelector} from "react-redux";

const Weather = () => {
    const weatherInfo = useSelector(state => state.weather);
    const messageInfo = useSelector(state => state.message.message);
    if (messageInfo) {
        return (
            <div className={'error'}>{messageInfo}</div>
        )
    }
    return (
        <div className={'infoWeath'}>
            <p>Location: {weatherInfo.country}, {weatherInfo.city}</p>
            <p>Temp: {weatherInfo.temp}</p>
            <p>Pressure: {weatherInfo.pressure}</p>
            <p>Sunset: {weatherInfo.sunset?.toLocaleTimeString()}</p>
        </div>
    )
}

export default Weather;