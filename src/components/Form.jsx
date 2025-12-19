import {useDispatch} from "react-redux";
import {fetchWeather} from "../api/getWeatherAction.js";

const Form = () => {
    const dispatch = useDispatch();
    const getWeather = (city) => {
        dispatch(fetchWeather(city));
    };
    const handleClickSubmit = e => {
        e.preventDefault();
        const city = e.currentTarget.city.value.trim();
        getWeather(city);
    }

    return (
        <form onSubmit={handleClickSubmit}>
            <input type={"text"} name={'city'}/>
            <button type={'submit'}>Get Weather</button>
        </form>
    )
}

export default Form;