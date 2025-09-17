import Navbar from "../header/Navbar"
import Search from "../header/Search"
import WeatherCard from "../weather/WeatherCard"
import WeatherDetails from "../weather/WeatherDetails"
import DailyForecast from "../weather/DailyForecast"
// import Forecast from "../weather/Forecast"
import HourlyForecast from "../weather/HourlyForecast"



const Background = () => {
  return (
    <div className="background bg-blue-950 w-screen h-full text-white">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <Navbar/>
        <Search/>
        <div className="mt-8 flex flex-col lg:flex-row lg:grid-cols-3 gap-6 w-full h-full items-start">
          <div className="lg:col-span-2 grid grid-cols-2 gap-6">
            <WeatherCard />
            <WeatherDetails />
            <DailyForecast />
          </div>
          <div>
            <HourlyForecast />
          </div>
        </div>
      </div>

      
    </div>
  )
}

export default Background