import DailyForecastItem from "./DailyForecastItem"

const DailyForecast = () => {
  return (
   <>
    <h2>Daily Forecast</h2>
    <div className="w-full h-auto md:w-full md:h-auto
    lg:w-full lg:h-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 
    p-6">
      
      <DailyForecastItem/>
    </div>
   </>
  )
}

export default DailyForecast
