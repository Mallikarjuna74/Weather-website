import { createContext } from "react";

export interface WeatherData {
  temperature: number;     // current temperature in °C
  humidity: number;        // relative humidity %
  windSpeed: number;       // wind speed in km/h or m/s (depends on API params)
  cityName: string;        // resolved from user search / geocoding
  weatherCode: number;     // raw code from API
  description: string;     // mapped string like "Sunny", "Cloudy"
}


type WeatherContextType = {
  weather: WeatherData | null;
  searchCity: (city: string) => void;
};

export const WeatherContext = createContext<WeatherContextType | null>(null);
