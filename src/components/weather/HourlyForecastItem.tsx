
const HourlyForecastItem = () => {
  return (
    <>
      <div className="flex justify-between items-center p-4 w-90 h-14 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs">
        <div className="flex flex-row items-center gap-4">
          <img src="src/assets/images/icon-sunny.webp" alt="Hourly Forecast Icon Image" className="w-12 h-12"/>
          <h2 className="text-lg font-light">3 PM</h2>
        </div>
        <h3 className="text-lg font-light">20°c</h3>
      </div>
    </>
  )
}

export default HourlyForecastItem
