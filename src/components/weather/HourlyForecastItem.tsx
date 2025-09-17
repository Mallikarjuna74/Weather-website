
const HourlyForecastItem = () => {
  return (
    <div>
       <div className="flex justify-between items-center p-4 w-84 h-14 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs">
        <div>
          <img src="src/assets/images/icon-sun.svg" alt="" />
          <h2>3PM</h2>
        </div>
        <h3>20°c</h3>
      </div>
    </div>
  )
}

export default HourlyForecastItem
