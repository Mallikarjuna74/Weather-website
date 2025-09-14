import WeatherDetails from "./WeatherDetails"

const WeatherCard = () => {
  return (
    <div className="weather-card relative flex justify-center items-center gap-6 mt-20 px-4 w-full max-w-xl h-96 bg-amber-200 backdrop-blur-md rounded-3xl overflow-hidden shadow-xl">
        <img src="src/assets/images/bg-today-small.svg" alt="Background" 
        className="absolute w-full h-full z-50 object-cover"/>
        <WeatherDetails/>     
    </div>
  )
}

export default WeatherCard
