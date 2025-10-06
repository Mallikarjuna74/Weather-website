import useWeather from "../../hooks/useWeather";

const WeatherDetails = () => {

  const { weather } = useWeather();

  return (
    <div className="weather-details w-auto 
      grid grid-cols-2 gap-4 md:grid-cols-4 xl:grid-cols-4 xl:gap-5
      justify-between items-center sm:gap-6 md:gap-5 lg:gap-10
      text-white">
      <div className="flex flex-col justify-between p-6 items-start 
        w-42 h-32 md:w-40 md:h-30 xl:w-48 xl:h-32 
        rounded-lg bg-white/10 backdrop-blur-md border border-white/20 
        text-white text-xs">
        <h3 className="text-lg">
          Feels like
        </h3>
        <h2 className="text-3xl">
          {Math.round(weather?.temperature ?? 0)}°C
        </h2>
      </div>

      <div className="flex flex-col justify-between p-6 items-start 
        w-42 h-32 md:w-40 md:h-30 xl:w-48 xl:h-32 
        rounded-lg bg-white/10 backdrop-blur-md border border-white/20 
        text-white text-xs">
        <h3 className="text-lg">
          Humidity
        </h3>
        <h2 className="text-3xl">
          {weather?.humidity ?? 0}%
        </h2>
      </div>

      <div className="flex flex-col justify-between p-6 items-start 
        w-42 h-32 md:w-40 md:h-30 xl:w-48 xl:h-32 
        rounded-lg bg-white/10 backdrop-blur-md border border-white/20 
        text-white text-xs">
        <h3 className="text-lg">
          Wind
        </h3>
        <h2 className="text-2xl">
          {weather?.windSpeed ?? 0} km/h
        </h2>
      </div>
      
      <div className="flex flex-col justify-between p-6 items-start 
        w-42 h-32 md:w-40 md:h-30 xl:w-48 xl:h-32 
        rounded-lg bg-white/10 backdrop-blur-md border border-white/20 
        text-white text-xs">
        <h3 className="text-lg">
          Precipitation
        </h3>
        <h2 className="text-3xl">
          {weather?.precipitation ?? 0} mm
        </h2>
      </div>
    </div>
  )
}

export default WeatherDetails
