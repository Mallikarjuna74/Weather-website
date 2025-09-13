const Navbar = () => {
  return (
    <div
      className="navbar flex justify-between items-center 
         px-4 sm:px-6 md:px-12 lg:px-20 py-4"
    >
      <div>
        <img
          src="src/assets/images/logo.svg"
          alt="logo"
          className="w-36 sm:w-36 md:w-32 lg:w-36"
        />
      </div>

      <div>
        <button
          className="flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg
                     bg-white/10 backdrop-blur-md border border-white/20 text-white
                     text-xs sm:text-sm md:text-base font-medium
                     shadow-md hover:bg-white/20 transition"
        >
          <img
            src="src/assets/images/icon-units.svg"
            alt="units"
            className="w-4 h-4 md:w-5 md:h-5"
          />
          Units
          <img
            src="src/assets/images/icon-dropdown.svg"
            alt="dropdown"
            className="w-3 h-3 md:w-4 md:h-4"
          />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
