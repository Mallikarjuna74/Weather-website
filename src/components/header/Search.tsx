import SearchIcon from "../../assets/images/icon-search.svg";

export default function SearchSection() {
  return (
    <div className="search flex flex-col justify-center items-center gap-6 mt-10 px-4">
      <h1 className="mb-10 text-6xl md:text-5xl xl:text-5xl font-bold text-white text-center leading-tight">
        How's the sky looking today?
      </h1>

      <div className="flex flex-col lg:flex-row justify-between gap-4 w-auto items-center max-w-xl">
        <div className="relative flex-1">
          <img
            src={SearchIcon}
            alt="Search Icon"
            className="absolute z-10 left-3 top-1/2 -translate-y-1/2 w-4 h-4 ml-2 opacity-70 pointer-events-none"
          />
          <input
            type="text"
            placeholder="Search for a place..."
            className="w-86 h-12 md:h-14 lg:w-100 lg:h-14 xl:w-124 xl:h-14 
                pl-12 pr-4 font-medium text-lg md:text-lg 
                rounded-xl bg-white/10 backdrop-blur-md 
                text-white 
                placeholder-gray-300 shadow-md 
                focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          className="w-86 h-12 md:h-14 lg:w-30 lg:h-14 xl:w-50 xl:h-14 
                     px-6 bg-blue-500 hover:bg-blue-700 
                     text-white font-bold text-sm md:text-base 
                     rounded-xl shadow-md transition"
        >
          Search
        </button>
      </div>  
    </div>
  );
}
