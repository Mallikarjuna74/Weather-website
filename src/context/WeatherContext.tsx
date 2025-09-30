import { createContext } from "react";
import type { WeatherData } from '../types/weathertype';

type WeatherContextType = {
  weather: WeatherData | null;
  searchCity: (city: string) => void;
};

export const WeatherContext = createContext<WeatherContextType | null>(null);
