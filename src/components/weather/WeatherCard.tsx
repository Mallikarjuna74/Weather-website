import useWeather from "../../hooks/useWeather";
import { getWeatherCondition } from "../../utils/weatherConditions";


const WeatherCard = () => {

  const { weather } = useWeather();

  if (!weather) return <div className="text-white">Loading...</div>;

   const code = weather?.daily?.weathercode?.[0] ?? 0;
    const condition = getWeatherCondition(code);

  return (
    <div className="weather-card relative w-[360px] h-76  md:w-[700px] md:h-72 
      lg:w-[820px] lg:h-80 xl:w-[835px] xl:h-80
      backdrop-blur-md rounded-2xl overflow-hidden shadow-xl"
    >
      <picture>
        <source
          media="(max-width: 640px)"
          srcSet="/Weather-website/images/bg-today-small.svg"
        />
        <img
          src="/Weather-website/images/bg-today-large.svg"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
      </picture>

      <div className="absolute inset-0 flex flex-col 
      md:flex-row md:justify-between md:items-center 
      lg:flex-row xl:flex-row xl:justify-between xl:items-center 
      p-4 text-white z-10">
        
        <div className="text-center md:text-left lg:text-left xl:text-left">
          <h2 className="text-4xl sm:text-lg md:text-3xl xl:text-3xl font-bold mb-4">
            {weather?.cityName}, {weather?.country}
          </h2>
          <h3 className="text-xl text-gray-100 sm:text-sm md:text-base opacity-90">
            {weather?.date}
          </h3>
        </div>

        <div className="flex flex-row justify-center items-center mt-4 sm:mt-2 md:mt-3 lg:mt-4 gap-2">
          <img src={condition.icon} alt={condition.label} 
            className="w-34 h-34 sm:w-12 sm:h-12 md:w-24 md:h-24 lg:w-24 lg:h-24 xl:w-24 xl:h-24"
          />
          <h1 className="text-7xl sm:text-3xl md:text-7xl lg:text-7xl xl:text-7xl font-bold">
            {Math.round(weather?.temperature)}°
          </h1>
        </div>

      </div>

    </div>
  );
};

export default WeatherCard;




