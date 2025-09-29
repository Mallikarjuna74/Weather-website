import axios from "axios";

export const fetchWeather = async (lat: number, lon: number) => {
    try{
        const url = "https://api.open-meteo.com/v1/forecast";

        const params = {
        latitude: lat,
        longitude: lon,
        current_weather: true,
        daily: ["temperature_2m_max", "temperature_2m_min", "weathercode"],
        hourly: ["temperature_2m", "relativehumidity_2m"],
        timezone: "auto"
        };

        const response = await axios.get(url, { params });
        return response.data;
    }
    catch(err){
        console.error("Error fetching weather:", err);
        throw err;

    }
};

// 🔍 Geocoding API - city → coordinates
export const fetchCoordinates = async (city: string) => {
  const url = "https://geocoding-api.open-meteo.com/v1/search";
  const params = {
    name: city,
    count: 1, // get top result
    language: "en",
    format: "json",
  };

  const response = await axios.get(url, { params });
  if (response.data.results && response.data.results.length > 0) {
    return response.data.results[0]; // { latitude, longitude, name, country }
  }
  throw new Error("City not found");
};