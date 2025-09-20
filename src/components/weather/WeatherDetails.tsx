

const WeatherDetails = () => {
  return (
    <div className="weather-details mt-6 sm:mt-10
    grid grid-cols-2 gap-4 md:grid-cols-4 items-center sm:gap-6 md:gap-8 lg:gap-12
    p-6 text-white">
      <div className="flex flex-col justify-between p-6 items-start w-42 h-32 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs">
        <h3 className="text-lg">
          Feels like
        </h3>
        <h2 className="text-3xl">
          30°C
        </h2>
      </div>

      <div className="flex flex-col justify-between p-6 items-start w-42 h-32 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs">
         <h3 className="text-lg">
          Humidity
        </h3>
        <h2 className="text-3xl">
          46%
        </h2>
      </div>

      <div className="flex flex-col justify-between p-6 items-start w-42 h-32 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs">
         <h3 className="text-lg">
          Wind
        </h3>
        <h2 className="text-3xl">
          14 km/h
        </h2>
      </div>
      
      <div className="flex flex-col justify-between p-6 items-start w-42 h-32 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs">
         <h3 className="text-lg">
          Precipitation
        </h3>
        <h2 className="text-3xl">
          0 mm
        </h2>
      </div>
    </div>
  )
}

export default WeatherDetails
