import { useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import { fetchWeather, fetchCoordinates } from "../api/weather";
import { WeatherContext } from "./WeatherContext";
import type { WeatherData } from '../types/weathertype';


type WeatherProviderProps = {
  children: ReactNode;
};

export const WeatherProvider = ({children}: WeatherProviderProps) => {

  const [weather, setWeather]= useState<WeatherData | null>(null);
  const [location, setLocation] = useState({ city: "Berlin", lat: 52.52, lon: 13.41, country: "Germany" });

  useEffect(() => {
    const loadWeather = async () => {
      try {
        const data = await fetchWeather(location.lat, location.lon);
        setWeather({ 
          cityName: location.city,
          temperature: data.current_weather.temperature,
          windSpeed: data.current_weather.windspeed,
          humidity: data.hourly?.relativehumidity_2m?.[0] ?? null,
          daily: data.daily,
          hourly: data.hourly,
          date: formatDate(new Date()),
          country: location.country,
          precipitation: data.hourly?.precipitation?.[0] ?? 0,
        });
      } catch (err) {
        console.error(err);
      }
    };
    loadWeather();
  }, [location]);

  const searchCity = async (city: string) => {
    try {
      const coords = await fetchCoordinates(city);
      setLocation({ 
        city: coords.name, 
        lat: coords.latitude, 
        lon: coords.longitude,
        country: coords.country  
      });
    } catch (err) {
      console.error(err);
      alert("City not found!");
    }
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", {
      weekday: "long",   // Sunday
      month: "short",    // Sep
      day: "numeric",    // 14
      year: "numeric",   // 2025
    });
  };


  return (
    <WeatherContext.Provider value={{ weather, searchCity }}>
      {children}
    </WeatherContext.Provider>
  );
};