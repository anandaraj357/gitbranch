import React, { useState, useEffect } from "react";

function WeatherApp() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Replace with your own OpenWeatherMap API key
  const API_KEY = "e46bdfe2d6fd61fbfaad99de66d2a5d4";  
  const CITY = "Chennai"; // you can change city
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}&units=metric`;

  useEffect(() => {
    fetch(URL)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch weather data");
        }
        return response.json();
      })
      .then((data) => {
        setWeather(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [URL]);

  if (loading) return <h2>Loading weather...</h2>;
  if (error) return <h2>Error: {error}</h2>;

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>🌤 Weather App</h1>
      <h2>{weather.name}, {weather.sys.country}</h2>
      <p>Temperature: {weather.main.temp}°C</p>
      <p>Humidity: {weather.main.humidity}%</p>
      <p>Condition: {weather.weather[0].description}</p>
    </div>
  );
}

export default WeatherApp;