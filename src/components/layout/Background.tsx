import Navbar from "../header/Navbar"
import Search from "../header/Search"
import WeatherCard from "../weather/WeatherCard"
import WeatherDetails from "../weather/WeatherDetails"
import DailyForecast from "../weather/DailyForecast"
// import Forecast from "../weather/Forecast"
import HourlyForecast from "../weather/HourlyForecast"



const Background = () => {
  return (
    <div className="bg-blue-950 min-h-screen w-full flex justify-center items-center text-white">
      <div className="max-w-10xl py-6">
        <Navbar />
        <Search />

        {/* Main Layout */}
        <div className="mt-8 grid grid-cols-1 gap-10 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 xl:gap-8">
          
          {/* Left side: Weather card + details + daily forecast */}
          <div className="flex flex-col gap-6 lg:col-span-2">
            <WeatherCard />
            <WeatherDetails />
            <DailyForecast />
          </div>

          {/* Right side: Hourly forecast */}
          <div>
            <HourlyForecast />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Background