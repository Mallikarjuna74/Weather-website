import { weatherConditions }from "../../utils/weatherConditions"
interface HourlyForecastItemProps {
  hourIndex: number;
  weather: {
    hourly: {
      time: string[];
      temperature_2m: number[];
      weathercode?: number[];
    };
  };
}
const HourlyForecastItem = ({ hourIndex, weather }: HourlyForecastItemProps) => {
  const time = new Date(weather.hourly.time[hourIndex]);
  const hour = time.toLocaleTimeString("en-US", { hour: "numeric" });
  const temp = Math.round(weather.hourly.temperature_2m[hourIndex]);

  const code = weather.hourly.weathercode?.[hourIndex] ?? 0;
  const condition = weatherConditions[code] || weatherConditions[0];

  return (
    <>
      <div className="flex justify-between items-center p-4 
        w-78 h-14 mx-auto
        md:w-162 lg:w-full rounded-lg bg-white/10 backdrop-blur-none 
        border border-white/20 text-white text-xs">

        <div className="flex flex-row items-center gap-4">
          <img 
            src={condition.icon} 
            alt={condition.label} 
            className="w-12 h-12"
          />
          <h2 className="text-lg font-light">{hour}</h2>
        </div>
        <h3 className="text-lg font-light">{temp}°C</h3>

      </div>
    </>
  )
}

export default HourlyForecastItem
