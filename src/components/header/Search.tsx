import SearchIcon from "../../assets/images/icon-search.svg";

export default function SearchSection() {
  return (
    <div className="search flex flex-col justify-center items-center gap-6 mt-20 px-4">
      <h1 className="text-3xl md:text-5xl font-bold text-white text-center leading-tight">
        How's the sky looking today?
      </h1>

      <div className="flex flex-col sm:flex-row gap-4 w-full max-w-xl">
        <div className="relative flex-1">
          <img
            src={SearchIcon}
            alt="Search Icon"
            className="absolute z-10 left-3 top-1/2 -translate-y-1/2 w-5 h-5 ml-2 opacity-70 pointer-events-none"
          />
          <input
            type="text"
            placeholder="Search for a place..."
            className="w-full h-12 md:h-14 pl-12 pr-4 font-medium text-sm md:text-lg 
                rounded-xl bg-white/10 backdrop-blur-md 
                text-white 
                placeholder-gray-300 shadow-md 
                focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          className="h-12 md:h-14 px-6 bg-blue-600 hover:bg-blue-700 
                     text-white font-bold text-sm md:text-base 
                     rounded-xl shadow-md transition"
        >
          Search
        </button>
      </div>
    </div>
  );
}
