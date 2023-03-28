import './current-weather.css';
import icon from '../../assets/weather-icon/weather1.png';


function CurrentWeather(){
    return (
        <div className="weather">
            <div>
            <img className="icon" src={icon} />
            </div>
            <h1>
                Thailand
            </h1>
            <div>
                <h1>
                    30° C
                </h1>
            </div>
        </div>
    );
}

export default CurrentWeather;

// 30°