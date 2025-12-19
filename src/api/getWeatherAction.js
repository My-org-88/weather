import {api_key, base_url} from "../utils/constants";
import {putWeather} from "../features/weather/weatherSlice.js"
import {putMessage} from "../features/message/messageSlice.js";

export const fetchWeather = (city) => {
    return (dispatch) => {
        dispatch(putMessage("Pending"));
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

                dispatch(putMessage(""));
            })
            .catch((error) => {
                console.log(error);
                dispatch(putMessage("Failed to fetch weather"));
                dispatch(putWeather({}));
            });
    };
};