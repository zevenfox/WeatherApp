import './current-weather.css';
import icon from '../../assets/weather-icon/weather1.png';


function CurrentWeather(){
    return (
        <div className="weather">
            <div>
            <img className="icon" src={icon} />
            </div>
            <h1 className='city'>
                Thailand
            </h1>
            <div>
                <h1 className='temp'>
                    30° C
                </h1>
                <h2>
                    Cloudy
                </h2>
            </div>
        </div>
    );
}

export default CurrentWeather;

// 30°