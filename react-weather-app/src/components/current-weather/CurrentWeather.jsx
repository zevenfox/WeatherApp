import './current-weather.css';
import icon1 from '../../assets/weather-icon/weather1.png';
import icon2 from '../../assets/weather-icon/weather2.png';


function CurrentWeather(){
    return (
        <div className="weather">
            <div>
            <img className="icon" src={icon2} />
            </div>
            <h1 className='city'>
                Bangkok
            </h1>
            <div>
                <h1 className='temp'>
                    37° C
                </h1>
                <h2>
                    Sunny
                </h2>
            </div>
        </div>
    );
}

export default CurrentWeather;

// 30°