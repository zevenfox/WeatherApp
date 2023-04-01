import './current-weather.css';
import icon2 from '../../assets/weather-icon/weather2.png';



const descriptionToImageMap = {
    'clear sky': 'weather1.png',
    'few clouds': 'weather1.png',
    'scattered clouds': 'weather1.png',
    'broken clouds': 'weather1.png',
    'shower rain': 'weather1.png',
    'rain': 'weather1.png',
    'thunderstorm': 'weather1.png',
    'snow': 'weather1.png',
    'mist': 'weather1.png'
};

  function CurrentWeather({ data }) {
    const description = data.weather[0].description.toLowerCase();
    const imageUrl = `../../assets/weather-icon/${descriptionToImageMap[description]}`;
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