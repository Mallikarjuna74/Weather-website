export interface DailyData {
  time: string[];
  temperature_2m_max: number[];
  temperature_2m_min: number[];
  weathercode: number[];
}

export interface HourlyData {
  time: string[];
  temperature_2m: number[];
  relativehumidity_2m: number[];
}

export interface WeatherData {
  cityName: string;
  country: string;
  temperature: number;
  windSpeed: number;
  humidity: number;
  daily: DailyData;
  hourly: HourlyData;
  weatherCode?: number;
  description?: string;
  date: string;
  precipitation?: number;
}
