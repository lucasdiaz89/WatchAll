import Moon from "../assets/moon.png";
import Sun from "../assets/sun.png";
import LightImg from "../assets/theme-dark-light.png";
import DarkImg from "../assets/theme-light-dark.png";
import { useState, useEffect, useRef } from "react";
import "./NavegateBar.css";

function NavegateBar() {
  const imageTheme = useRef();

  const [isDark, setIsDark] = useState(() => {
    if (window.matchMedia("(prefers-color-schema:dark").matches) {
      return true;
    }
    return false;
  });

  const [isHover, setIsHover] = useState(false);


  const handleChangeTheme = () => {
    setIsDark(!isDark);
  };

  const handleChangeIconBW = () => {
    setIsHover(!isHover);
  };

  useEffect(() => {
    
   if(isDark){
      document.querySelector("html").classList.add("dark");
      imageTheme.current.src =isHover?  Sun : LightImg ;
   }
   else{
    document.querySelector("html").classList.remove("dark");
    imageTheme.current.src =isHover?  Moon : DarkImg ;
  }
}, [isDark]);

  useEffect(() => {
    imageTheme.current.src =isHover? (isDark? Sun : Moon ) :
    (isDark? LightImg  :DarkImg );
    },[isHover]);

  return (
    <>
      <nav className="relative py-6 border border-slate-800 bg-slate-200 rounded-md dark:bg-slate-800 dark:border-slate-200">
        <div className="container px-4 mx-auto">
          <div className="flex items-center">
            <ul className="hidden lg:flex ml-14 lg:w-auto lg:space-x-12">
              <li className="group relative">
                <a
                  href="#"
                  className="inline-block text-sm text-gray-900 hover:underline font-medium dark:text-slate-200"
                >
                  Option 1
                </a>
              </li>
              <li className="group relative">
                <a
                  href="#"
                  className="inline-block text-sm text-gray-900 hover:underline font-medium dark:text-slate-200"
                >
                  Option 2
                </a>
              </li>
              <li className="group relative">
                <a
                  href="#"
                  className="inline-block text-sm text-gray-900 hover:underline font-medium dark:text-slate-200"
                >
                  Option 3
                </a>
              </li>
            </ul>
            <div className="hidden lg:block ml-auto">
              <div className="flex items-center">
              <ul className="hidden lg:flex ml-14 lg:w-auto lg:space-x-12">
              <li className="group relative">
                <a
                  href="#"
                  className="inline-block mr-9 text-sm font-semibold text-cyan-600  hover:underline dark:text-slate-200"
                >
                  Sign In
                </a>
                </li>
                <li className="group relative">
                <a
                  href="#"
                  className="relative group inline-block py-3 px-4 text-sm font-semibold text-cyan-600 hover:text-slate-900 dark:text-slate-200 rounded-md overflow-hidden transition duration-1"
                >
                  <div className="absolute top-0 right-full w-full h-full bg-cyan-600 transform group-hover:translate-x-full group-hover:scale-102 transition duration-1"></div>
                  <span className="relative">Create an Account</span>
                </a>
                </li>
                <li className="group relative">
                <img ref={imageTheme}                  
                  onMouseEnter={()=>handleChangeIconBW()}
                  onMouseOut={()=>handleChangeIconBW()}
                  onClick={() => handleChangeTheme()}                  
                />
                </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavegateBar;
