import useWeather from "../../hooks/useWeather"
import DailyForecastItem from "./DailyForecastItem"

const DailyForecast = () => {
  const { weather } = useWeather();

  if (!weather?.daily) return null;

  return (
    <div className="w-full max-w-[360px] md:max-w-[700px] lg:max-w-[820px] xl:max-w-[835px]">
      <h2 className="mb-4 text-2xl font-semibold text-white text-left">
        Daily Forecast
      </h2>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-4">
        {weather.daily.time.map((_: string, index: number) => (
          <DailyForecastItem key={index} dayIndex={index} />
        ))}
      </div>
    </div>
  )
}

export default DailyForecast

