import './current-weather.css';
import icon2 from '../../assets/weather-icon/weather2.png';


const descriptionToImageMap = {
    'clear sky': 'weather1.png',
    'few clouds': 'weather2.png',
    'scattered clouds': 'weather3.png',
    'broken clouds': 'weather4.png',
    'shower rain': 'weather5.png',
    'rain': 'weather6.png',
    'thunderstorm': 'weather7.png',
    'snow': 'weather8.png',
    'mist': 'weather9.png',
    'overcast clouds' : 'weather9.png'
};


  function CurrentWeather({ data }) {
    const description = data.weather[0].description.toLowerCase();
    const imageUrl = require(`../../assets/weather-icon/${descriptionToImageMap[description]}`);
    return (
      <div className="weather">
        <div>
          <img className="icon" src={imageUrl} alt="weather icon" />
        </div>
        {data && (
          <>
            <h1 className="city">{data.city}</h1>
            <div>
              <h1 className="temp">{Math.round(data.main.temp)}°C</h1>
              <h2>{data.weather[0].description}</h2>
            </div>
          </>
        )}
      </div>
    );
  }

  export default CurrentWeather;
// 30°