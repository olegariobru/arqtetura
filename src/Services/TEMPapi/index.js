import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { WiDaySunny, WiDayCloudy, WiSnow, WiRain } from 'react-icons/wi';

const TemperatureIcon = () => {
  const [temperature, setTemperature] = useState(null);
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTemperature = async () => {
      try {
        const response = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
          params: {
            q: 'São Paulo',
            appid: '099d533e9d87f86b05da1c478c83171b',
            units: 'metric'
          }
        });
        
        const temp = Math.round(response.data.main.temp);
        setTemperature(temp);
        setWeather(response.data.weather[0].main);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchTemperature();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  let WeatherIcon;
  switch (weather) {
    case 'Clear':
      WeatherIcon = WiDaySunny;
      break;
    case 'Clouds':
      WeatherIcon = WiDayCloudy;
      break;
    case 'Snow':
      WeatherIcon = WiSnow;
      break;
    case 'Rain':
      WeatherIcon = WiRain;
      break;
    default:
      WeatherIcon = WiDaySunny; 
  }

  return (
    <div style={{ textAlign: 'center', fontSize: '1.3rem' }}>
      <WeatherIcon />
      <p>{temperature}°C</p>
    </div>
  );
};

export default TemperatureIcon;
