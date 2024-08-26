
import React from "react";
import { UseWeatherAPPContext } from "../../Context/Context";

const HumidityComponents = () => {
    let { state: { current, daily } } = UseWeatherAPPContext();

    const getWindDirection = (degree) => {
        if (degree > 337.5) return 'N';
        if (degree > 292.5) return 'NW';
        if (degree > 247.5) return 'W';
        if (degree > 202.5) return 'SW';
        if (degree > 157.5) return 'S';
        if (degree > 122.5) return 'SE';
        if (degree > 67.5) return 'E';
        if (degree > 22.5) return 'NE';
        return 'N';
    };

    const calculateAverageTemps = () => {
        if (!daily || daily.length === 0) return { avgMaxTemp: 0, avgMinTemp: 0 };
        
        // Calculate the sum of max and min temperatures
        const totalMaxTemp = daily.reduce((sum, day) => sum + day.temp.max, 0);
        
        const totalMinTemp = daily.reduce((sum, day) => sum + day.temp.min, 0);
        
        // Calculate the average of max and min temperatures
        const avgMaxTemp = Math.round(totalMaxTemp / daily.length);
        const avgMinTemp = Math.round(totalMinTemp / daily.length);

        return { avgMaxTemp, avgMinTemp };
    };

    const { avgMaxTemp, avgMinTemp } = calculateAverageTemps();

    return (
        <>
            {current ? (
                <div className='humidityWrap'>
                    <div className='humidityData'>
                        <div className='title'>AVERAGE MAX & MIN TEMP (7 DAYS)</div>
                        <div className='value'>{avgMaxTemp}<sup>°</sup>/{avgMinTemp}<sup>°</sup></div>
                    </div>
                    <div className='humidityData'>
                        <div className='title'>MAX & MIN TEMP (CURRENT)</div>
                        <div className='value'>{Math.round(current.temp.max)}<sup>°</sup>/{Math.round(current.temp.min)}<sup>°</sup></div>
                    </div>
                    <div className='humidityData'>
                        <div className='title'>HUMIDITY</div>
                        <div className='value'>{current.humidity} %</div>
                    </div>
                    <div className='humidityData'>
                        <div className='title'>WIND SPEED</div>
                        <div className='value'>{Math.round(current.wind_speed)} km/h</div>
                    </div>
                    <div className='humidityData'>
                        <div className='title'>WIND DIRECTION</div>
                        <div className='value'>{getWindDirection(current.wind_deg)}</div>
                    </div>
                </div>
            ) : 'Loading...'}
        </>
    );
};

export default HumidityComponents;
