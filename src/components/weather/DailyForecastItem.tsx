import useWeather from "../../hooks/useWeather";
import { getWeatherCondition } from "../../utils/weatherConditions";

interface DailyForecastItemProps {
  dayIndex: number;
}

const DailyForecastItem = ({ dayIndex }: DailyForecastItemProps) => {
  const { weather } = useWeather();

  if (!weather?.daily) return null;

   const code = weather?.daily?.weathercode?.[dayIndex] ?? 0;
  const condition = getWeatherCondition(code);

  const date = new Date(weather?.daily?.time?.[dayIndex]);
  const weekday = date.toLocaleDateString("en-US", { weekday: "short" });

  return (
    <div className="h-48 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 text-white flex flex-col justify-between p-4 items-center text-center">
      <div className="text-lg font-medium">
        {weekday}
      </div>
      <div>
        <img src={condition.icon} alt="Weather icon" className="w-16 h-16" />
      </div>
      <div className="flex justify-between w-full text-base">
        <span>{Math.round(weather?.daily?.temperature_2m_max?.[dayIndex])}°</span>
        <span>{Math.round(weather?.daily?.temperature_2m_min?.[dayIndex])}°</span>
      </div>
    </div>
  );
};

export default DailyForecastItem;

