import DailyForecastItem from "./DailyForecastItem"

const DailyForecast = () => {
  return (
   <>
    <h2>Daily Forecast</h2>
    <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-7 gap-4">
      <DailyForecastItem/>
    </div>
   </>
  )
}

export default DailyForecast
