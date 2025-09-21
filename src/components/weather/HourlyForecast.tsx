import HourlyForecastItem from "./HourlyForecastItem"

const HourlyForecast = () => {
  return (
    <>
      <div className="w-90 h-200 rounded-2xl p-2 bg-white/10 backdrop-blur-md border border-white/20 text-white">
        <div className="flex justify-between items-center p-4 pb-0">
            <h2 className="text-lg sm:text-lg md:text-2xl lg:text-xl font-normal">Hourly Forecast</h2>
            <button className="flex items-center gap-2 px-3 sm:px-4 py-2 
            rounded-lg bg-white/10 backdrop-blur-md border border-white/20 text-white text-s 
            font-light sm:text-sm md:text-lg lg:text-lg shadow-md hover:bg-white/20 transition
            sm:w-46 md:w-36 md:items-center lg:w-34 lg:h-8 lg:items-center xl:76 xl:items-center 2xl:126"
            >
              Saturday
              <img src="src/assets/images/icon-dropdown.svg" alt="dropdown" className="w-3 h-3 font-light ml-2 md:w-5 md:h-5 lg:w-4 lg:h-4 xl:w-4 xl:h-4"/>
            </button>
        </div>
        <div className="flex flex-wrap justify-center items-start gap-4 p-4 text-white">
          <HourlyForecastItem/>
          <HourlyForecastItem/>
          <HourlyForecastItem/>
          <HourlyForecastItem/>
          <HourlyForecastItem/>
          <HourlyForecastItem/>
          <HourlyForecastItem/>
          <HourlyForecastItem/>
          <HourlyForecastItem/>
          <HourlyForecastItem/>
        </div>
      </div>
    </>
  )
}

export default HourlyForecast
