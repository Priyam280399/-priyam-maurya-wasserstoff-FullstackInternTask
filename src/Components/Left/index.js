
import React, { useState } from 'react';
import dayjs from "dayjs";
import { UseWeatherAPPContext } from '../../Context/Context';

const LeftComponents = () => {
    const WEEKDAYS = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];

    const { state: { city, current } } = UseWeatherAPPContext();
    const [unit, setUnit] = useState('C'); // 'C' for Celsius, 'F' for Fahrenheit

    if (!current) return <div>Loading...</div>;

    const weekdayIndex = dayjs.unix(current.dt).day();

    // Function to convert temperature
    const convertTemp = (temp) => {
        return unit === 'C' ? temp : (temp * 9/5) + 32;
    };

    // Toggle unit between Celsius and Fahrenheit
    const toggleUnit = () => {
        setUnit(prevUnit => prevUnit === 'C' ? 'F' : 'C');
    };

    return (
        <>
            <div className='leftWrap'>
                <div className='dateWrap'>
                    <h2>{WEEKDAYS[weekdayIndex]}</h2>
                    <span className="dateDay">
                        {dayjs.unix(current.dt).format("DD MMM YYYY")}
                    </span>
                    <span className="locationName">{city.city} - {city.admin_name} - {city.country}</span>
                </div>
                <div className="weatherContainer">
                    <img
                        className="weatherIcon" alt="weather icon"
                        src={`http://openweathermap.org/img/wn/${current.weather[0].icon}@2x.png`}
                    />
                    <h1 className="weatherTemp">
                        {Math.round(convertTemp(current.temp.day))}°{unit} 
                    </h1>
                    <h3 className="weatherDesc">{current.weather[0].main}</h3>
                    <button onClick={toggleUnit} style={{ fontWeight: 'bold' }}>
                        Switch to °{unit === 'C' ? 'F' : 'C'}
                    </button>
                </div>
            </div>
        </>
    );
}

export default LeftComponents;

