import { useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import { fetchWeather, fetchCoordinates } from "../api/weather";
import { WeatherContext } from "./WeatherContext";


type WeatherProviderProps = {
  children: ReactNode;
};

export const WeatherProvider = ({children}: WeatherProviderProps)=>{
    const [weather, setWeather]= useState(null);
    const [location, setLocation] = useState({ city: "Berlin", lat: 52.52, lon: 13.41 });


    useEffect(() => {
    const loadWeather = async () => {
      try {
        const data = await fetchWeather(location.lat, location.lon);
        setWeather({ ...data, city: location.city });
      } catch (err) {
        console.error(err);
      }
    };
    loadWeather();
  }, [location]);

  const searchCity = async (city: string) => {
    try {
      const coords = await fetchCoordinates(city);
      setLocation({ city: coords.name, lat: coords.latitude, lon: coords.longitude });
    } catch (err) {
      console.error(err);
      alert("City not found!");
    }
  };

  return (
    <WeatherContext.Provider value={{ weather, searchCity }}>
      {children}
    </WeatherContext.Provider>
  );
};