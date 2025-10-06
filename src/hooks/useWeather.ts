import { useContext } from "react";

import { WeatherContext } from "../context/WeatherContext";

const useWeather = () => {
  const ctx = useContext(WeatherContext);
  if (!ctx) {
    throw new Error("useWeather must be used within a WeatherProvider");
  }
  return ctx;
};

export default useWeather;
