

const DailyForecastItem = () => {
  return (
    <div className="h-48 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 text-white flex flex-col justify-between p-4 items-center text-center">
      <div className="text-lg font-medium">
        Sun
      </div>
      <div>
        <img src="src/assets/images/icon-storm.webp" alt="Stormy weather" className="w-16 h-16"/>
      </div>
      <div className="flex justify-between w-full text-base">
        <span>24°C</span>
        <span className="opacity-70">14°C</span>
      </div>
    </div>
  )
}

export default DailyForecastItem
