

const WeatherCard = () => {
  return (
    <div
      className="weather-card relative mx-auto 
                 w-[360px] h-76  
                 md:w-[360px] md:h-72 
                 lg:w-[820px] lg:h-80 
                 backdrop-blur-md rounded-2xl overflow-hidden shadow-xl"
    >
      <picture>
        <source
          media="(max-width: 640px)"
          srcSet="src/assets/images/bg-today-small.svg"
        />
        <img
          src="src/assets/images/bg-today-large.svg"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
      </picture>

      <div className="absolute inset-0 flex flex-col justify-center items-center p-4 sm:p-6 text-white z-10">
        <div className="text-center">
          <h2 className="text-4xl sm:text-lg md:text-xl font-bold mb-4">
            Berlin, Germany
          </h2>
          <h3 className="text-xl text-gray-100 sm:text-sm md:text-base opacity-90">
            Sunday, Sep 14, 2025
          </h3>
        </div>
        <div className="flex flex-row justify-center items-center mt-4 sm:mt-2 md:mt-3 lg:mt-4 gap-2">
          <img src="src/assets/images/icon-sunny.webp" alt="weather icon" 
          className="w-34 h-34 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16"/>
          <h1 className="text-7xl sm:text-3xl md:text-5xl font-bold">
            28°C
          </h1>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;




