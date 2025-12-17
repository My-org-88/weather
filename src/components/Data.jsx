import Form from "./Form.jsx";
import Weather from "./Weather.jsx";
import {useDispatch, useSelector} from "react-redux";
import {fetchWeather} from "../actions/getWeatherAction.js";

const Data = () => {
    const weatherInfo = useSelector(state => state.weather);
    const messageInfo = useSelector(state => state.message.message);
    const dispatch = useDispatch();
    const getWeather = (city) => {
        dispatch(fetchWeather(city));
    };

    return (
        <div>
            <Form getWeather={getWeather}/>
            <Weather weather={weatherInfo} message={messageInfo}/>
        </div>
    )
}

export default Data;