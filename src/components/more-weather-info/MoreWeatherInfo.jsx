import React from "react";
import cloudIcon from "../../assets/cloud.png";
import humidityIcon from "../../assets/humidity.png";
import windIcon from "../../assets/wind.png";
import "./more-weather-info.css"

export default function MoreWeatherInfo({data}){
    const cloudData = data.clouds.all;
    const huminityData = data.main.humidity;
    const windData = data.wind.speed;
    return (
        <div className="rightContent">
            <div className="content">
                <img src={humidityIcon} alt="humidityIcon" className="catagoryIcon"/>
                <p className="catagory">Humidity</p>
                <p className="value">{huminityData}</p>
            </div>
            <div className="content">
                <img src={windIcon} alt="windSpeedIcon" className="catagoryIcon"/>
                <p className="catagory">Wind Speed</p>
                <p className="value">{windData}</p>
            </div>
            <div className="content">
                <img src={cloudIcon} alt="cloudIcon" className="catagoryIcon"/>
                <p className="catagory">Cloud</p>
                <p className="value">{cloudData}</p>
            </div>
        </div>
    )
}