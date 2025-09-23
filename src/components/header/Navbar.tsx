const Navbar = () => {
  return (
    <div className="navbar flex w-full justify-between items-center px-4 py-6 md:px-8 lg:px-8 xl:px-0">
      
      <div>
        <img src="src/assets/images/logo.svg" alt="logo" className="w-36 sm:w-46 md:w-56 lg:w-56 xl:96 xl: 2xl:126"/>
      </div>

      <div>
        <button className="flex justify-evenly items-center gap-2 px-3 sm:px-4 py-2 
        rounded-lg bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs 
        sm:text-sm md:text-lg lg:text-lg font-medium shadow-md hover:bg-white/20 transition
        sm:w-46 md:w-40 md:items-center lg:w-40"
        >
          <img src="src/assets/images/icon-units.svg" alt="units" className="w-4 h-4 md:w-6 md:h-6 lg:w-6 lg:h-6"/>
          Units
          <img src="src/assets/images/icon-dropdown.svg" alt="dropdown" className="w-3 h-3 md:w-5 md:h-5"/>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
