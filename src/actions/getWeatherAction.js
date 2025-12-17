
import {api_key, base_url} from "../utils/constants.js";
import {changeMessage} from "./getMessage.js";

export const PUT_WEATHER='PUT_WEATHER'

export const putWeather=weather=>({
    type:PUT_WEATHER,
    payload:weather
})

export const fetchWeather = (city) => {
    return (dispatch) => {
        dispatch(changeMessage("Pending"));
        dispatch(putWeather({}));

        fetch(`${base_url}?q=${city}&appid=${api_key}&units=metric`)
            .then((response) => response.json())
            .then((data) => {
                dispatch(
                    putWeather({
                        country: data.sys.country,
                        city: data.name,
                        temp: data.main.temp,
                        pressure: data.main.pressure,
                        sunset: new Date(data.sys.sunset * 1000),
                    })
                );

                dispatch(changeMessage(""));
            })
            .catch((error) => {
                console.log(error);
                dispatch(changeMessage("Failed to fetch weather"));
                dispatch(putWeather({}));
            });
    };
};