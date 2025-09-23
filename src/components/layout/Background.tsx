import Navbar from "../header/Navbar"
import Search from "../header/Search"
import WeatherCard from "../weather/WeatherCard"
import WeatherDetails from "../weather/WeatherDetails"
import DailyForecast from "../weather/DailyForecast"
import HourlyForecast from "../weather/HourlyForecast"



const Background = () => {
  return (
    <div className="bg-blue-950 min-h-screen w-full flex justify-center items-center text-white">
      <div className="w-full max-w-screen-xl py-6">
        <Navbar />
        <Search />

        {/* Main Layout */}
        <div className="mt-8 grid grid-cols-1 items-start gap-10 lg:grid-cols-3 lg:gap-2">
          
          {/* Left side: Weather card + details + daily forecast */}
          <div className="flex flex-col gap-6 items-center md:justify-center lg:justify-start lg:col-span-2">
            <WeatherCard />
            <WeatherDetails />
            <DailyForecast />
          </div>

          {/* Right side: Hourly forecast */}
          <div className="flex justify-center lg:justify-start">
            <HourlyForecast />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Background