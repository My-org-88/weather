import Form from "./Form.jsx";
import Weather from "./Weather.jsx";
import {useSelector} from "react-redux";


const Data = () => {
    const weatherInfo = useSelector(state => state.weather);
    const messageInfo = useSelector(state => state.message.message);


    return (
        <div>
            <Form/>
            <Weather weather={weatherInfo} message={messageInfo}/>
        </div>
    )
}

export default Data;