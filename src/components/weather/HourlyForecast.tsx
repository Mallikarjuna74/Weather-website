import { useState, useEffect, useRef} from "react"
import HourlyForecastItem from "./HourlyForecastItem"
import useWeather from "../../hooks/useWeather"

const HOURLY_STEP = 9;

const HourlyForecast = () => {
  const { weather} = useWeather();
  const [selectedDay, setSelectedDay] = useState(0);
  const [open, setOpen] = useState(false);

  const [visibleHours, setVisibleHours] = useState(HOURLY_STEP);
  const scrollRef = useRef<HTMLDivElement>(null);  

  useEffect(() => {
    setVisibleHours(HOURLY_STEP);
  }, [selectedDay]);

  useEffect(() => {
    const scrollElement = scrollRef.current;
    if (!scrollElement || !weather?.hourly) return;

    const hoursPerDay = 24;
    const start = selectedDay * hoursPerDay;
    const end = start + hoursPerDay;
    const dayHours = weather.hourly.time.slice(start, end);
    const hasMoreHours = visibleHours < dayHours.length;

    if (!hasMoreHours) return;

    const handleScroll = () => {
      const isNearBottom = 
        scrollElement.scrollTop + scrollElement.clientHeight >= 
        scrollElement.scrollHeight - 200; 

      if (isNearBottom) {
        setVisibleHours(prev => Math.min(prev + HOURLY_STEP, dayHours.length));
      }
    };

    scrollElement.addEventListener('scroll', handleScroll);

    return () => {
      scrollElement.removeEventListener('scroll', handleScroll);
    };
  }, [weather, selectedDay, visibleHours]);

  if (!weather?.hourly) return null;

  const hoursPerDay = 24;
  const start = selectedDay * hoursPerDay;
  const end = start + hoursPerDay;
  const dayHours = weather.hourly.time
    .map((t: string, index: number) => ({ t, index }))
    .slice(start, end);
  
  const hoursToDisplay = dayHours.slice(0, visibleHours);
  
  
  const dayName = new Date(weather.hourly.time[start]).toLocaleDateString("en-US", {
    weekday: "long",
  });
  
  return (
    <>
      <div className="w-90 h-185 mx-auto md:w-auto md:mx-8 xl:w-136 rounded-2xl p-2
      bg-white/10 backdrop-blur-md border border-white/20 text-white
      flex flex-col"
      >

        <div className="flex justify-between items-center p-4 pb-0">
            
            <h2 className="text-lg sm:text-lg md:text-2xl lg:text-xl font-normal">
              Hourly Forecast
            </h2>

            <button className="flex items-center gap-2 px-6 py-2 
              rounded-lg bg-white/10 backdrop-blur-none border border-white/20 text-white text-s 
              font-normal sm:text-sm md:text-lg lg:text-lg shadow-md hover:bg-white/20 transition
              sm:w-46 md:w-36 md:items-center lg:w-34 lg:h-8 xl:w-36 xl:h-10 lg:items-center xl:76 xl:items-center 2xl:126"
              onClick={() => setOpen(!open)}
            >
              {dayName}
              <img src="src/assets/images/icon-dropdown.svg" alt="dropdown" 
                className={
                `w-3 h-3 font-light ml-2 
                md:w-5 md:h-5 lg:w-4 lg:h-4 xl:w-4 xl:h-4 
                transform transition-transform ${
                open ? "rotate-180" : "rotate-0"} `}
              />

            </button>
            {open && (
            <div className="absolute bottom-0 mt-2 w-40 bg-gray-800 border border-white/20 rounded-lg shadow-lg z-10">
              {Array.from({ length: 7 }).map((_, i) => {
                const label = new Date(weather.hourly.time[i * hoursPerDay]).toLocaleDateString(
                  "en-US",
                  { weekday: "long" }
                );
                return (
                  <div
                    key={i}
                    className="px-4 py-2 cursor-pointer hover:bg-gray-700"
                    onClick={() => {
                      setSelectedDay(i);
                      setOpen(false);
                    }}
                  >
                    {label}
                  </div>
                );
              })}
            </div>
          )}
        </div>
        <div className=" flex-grow h-170  mt-2 overflow-y-auto overflow-auto custom-scrollbar" 
          ref={scrollRef}>
          <div className="flex flex-col justify-center items-start gap-4 p-4 text-white">
          {hoursToDisplay.map(({ index }) => (
          <HourlyForecastItem key={index} hourIndex={index} weather={weather} />
          ))}
        </div>
        </div>
      </div>
    </>
  )
}

export default HourlyForecast
