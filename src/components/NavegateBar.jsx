import Moon from "../assets/moon.png";
import Sun from "../assets/sun.png";
import LightImg from "../assets/theme-dark-light.png";
import DarkImg from "../assets/theme-light-dark.png";
import { useState, useEffect, useRef } from "react";
import "./NavegateBar.css";
import { FilmIcon } from "@heroicons/react/24/solid";

function NavegateBar() {
  const imageTheme = useRef();
  let Links = [
    {id:1, name: "Movies", link: "/" },
    {id:2, name: "Series", link: "/" },
    {id:3, name: "Documentary", link: "/" },
    {id:4, name: "Platform", link: "/" },
  ];
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
    if (isDark) {
      document.querySelector("html").classList.add("dark");
      imageTheme.current.src = isHover ? Sun : LightImg;
      imageTheme.current.title = isHover ? "Change Theme Light" : "";
    } else {
      document.querySelector("html").classList.remove("dark");
      imageTheme.current.src = isHover ? Moon : DarkImg;
      imageTheme.current.title = isHover ? "Change Theme Dark" : "";
    }
  }, [isDark, isHover]);

  return (
    <>
      <nav className="shadow-md w-full border border-slate-800 bg-slate-200 rounded-md dark:bg-slate-800 dark:border-slate-200">
        <div className="md:px10 py-4 px-7 md:flex justify-between item-center">

          <div className="flex text-2x1 cursor-pointer items-center gap-2">
            <FilmIcon className="w-7 h-7 text-slate-800 dark:text-emerald-400" />
            <span className="font-bold text-slate-800 dark:text-slate-200">
              WATCH ALL
            </span>
          </div>

          <ul className="md:flex pr-9 md:pl-0 ">
            {Links.map((link) => (
              <li key={link.id} className="md:flex my-7 pe-8 md:my-0 md:ml-0 text-slate-800 dark:text-slate-200 font-semibold items-center">
                <a href="/">{link.name}</a>
              </li>
            ))}
          </ul>

              

          <img className="w-7 h-7"
            ref={imageTheme}
            onMouseEnter={() => handleChangeIconBW()}
            onMouseOut={() => handleChangeIconBW()}
            onClick={() => handleChangeTheme()}
          />
        </div>
      </nav>
    </>
  );
}

export default NavegateBar;
