import HourlyForecastItem from "./HourlyForecastItem"

const HourlyForecast = () => {
  return (
    <>
      <div className="h-220 w-90 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs">
        <div className="flex justify-between items-center p-4 sm:p-6 text-white">
            <h2 className="text-base sm:text-lg md:text-2Sxl font-semibold">Hourly Forecast</h2>
            <button className="flex items-center gap-2 px-3 sm:px-4 py-2 
            rounded-lg bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs 
            sm:text-sm md:text-lg lg:text-lg font-medium shadow-md hover:bg-white/20 transition
            sm:w-46 md:w-36 md:items-center lg:w-30 lg:h-8 lg:items-center xl:76 xl:items-center 2xl:126"
            >
              Units
              <img src="src/assets/images/icon-dropdown.svg" alt="dropdown" className="w-3 h-3 ml-2 md:w-5 md:h-5"/>
            </button>
        </div>
        <div className="flex justify-center items-center p-4 sm:p-6 text-white">
          <HourlyForecastItem/>
        </div>
      </div>
    </>
  )
}

export default HourlyForecast
