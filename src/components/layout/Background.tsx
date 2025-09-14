import Navbar from "../header/Navbar"
import Search from "../header/Search"
import WeatherDetails from "../weather/WeatherDetails"



const Background = () => {
  return (
    <div className="background bg-blue-950 w-screen h-svh text-white">
      <Navbar/>
      <Search/>
      <WeatherDetails/>
    </div>
  )
}

export default Background
