import { useState } from "react";
const Navbar = () => {
  const [open, setOpen] = useState(false);

  const CheckMark = () => (
    <img src="/images/icon-checkmark.svg" alt="selected" className="w-3 h-3" /> 
  );

  return (
    <div className="navbar flex w-full justify-between items-center px-4 py-6 md:px-8 lg:px-8 xl:px-0">
      
      <div>
        <img src="/images/logo.svg" alt="logo" className="w-36 sm:w-46 md:w-56 lg:w-56 xl:96 xl: 2xl:126"/>
      </div>

      <div className="relative">
        <button className="flex justify-evenly items-center gap-2 px-3 sm:px-4 py-2 
        rounded-lg bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs 
        sm:text-sm md:text-lg lg:text-lg font-medium shadow-md hover:bg-white/20 transition
        sm:w-46 md:w-40 md:items-center lg:w-40"
        onClick={() => setOpen(!open)}
        >
          <img src="/images/icon-units.svg" alt="units" className="w-4 h-4 md:w-6 md:h-6 lg:w-6 lg:h-6"/>
          Units
          <img src="src/assets/images/icon-dropdown.svg" alt="dropdown" 
          className={`w-3 h-3 md:w-5 md:h-5 ${open ? "rotate-180" : "rotate-0"}`}/>
        </button>
        {open && (
          <div className="absolute top-full right-0 mt-2 w-52 bg-blue-950 backdrop-blur-2xl border border-white/20 rounded-xl shadow-2xl text-white p-4 z-100">
            
            <h3 className="text-sm font-semibold mb-4 border-b border-white/10 pb-2">Switch to Imperial</h3>
            
            {/* Temperature Section */}
            <div className="text-sm">
                <p className="text-white/60 mb-2">Temperature</p>
                <div className="flex justify-between items-center py-2 cursor-pointer hover:bg-white/5 rounded">
                    <span>Celsius (°C)</span>
                    <CheckMark />
                </div>
                <div className="flex justify-between items-center py-2 cursor-pointer hover:bg-white/5 rounded mb-4 border-b border-white/10">
                    <span>Fahrenheit (°F)</span>
                </div>
            </div>
            <div className="text-sm">
                <p className="text-white/60 mb-2">Wind Speed</p>
                <div className="flex justify-between items-center py-2 cursor-pointer hover:bg-white/5 rounded">
                    <span>km/h</span>
                    <CheckMark />
                </div>
                <div className="flex justify-between items-center py-2 cursor-pointer hover:bg-white/5 rounded mb-4 border-b border-white/10">
                    <span>mph</span>
                </div>
            </div>
            <div className="text-sm">
                <p className="text-white/60 mb-2">Precipitation</p>
                <div className="flex justify-between items-center py-2 cursor-pointer hover:bg-white/5 rounded">
                    <span>Millimeters (mm)</span>
                    <CheckMark />
                </div>
                <div className="flex justify-between items-center py-2 cursor-pointer hover:bg-white/5 rounded">
                    <span>Inches (in)</span>
                </div>
            </div>

          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
