
import DropDownList from "./DropDownList";
import ImageChangeTheme from "./ImageChangeTheme";
import { FilmIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";

function NavigateBar(props) {



const [urlApi, setUrlApi] = useState(props.urlNew);

  const [select, setSelect] = useState("");
  let CategoryGender = [
    { id: 1, name: "Terror", link: "/" },
    { id: 2, name: "Romantic", link: "/" },
    { id: 3, name: "Funny", link: "/" },
    { id: 4, name: "Drama", link: "/" },
  ];
  let CategoryStreaming  = [
    { id: 1, name: "Netflix", link: "https://jsonplaceholder.typicode.com/todos" },
    { id: 2, name: "HBO MAX", link: "hbomax.com" },
    { id: 3, name: "Star+", link: "/" },
    { id: 4, name: "Disney+", link: "/" },
    { id: 5, name: "Prime Video", link: "/" },
  ];
  let CategoryType = [
    {
      categoryTypeId: 1,
      categoryName: "CategoryGender",
      categoryObject: CategoryGender,
    },
    {
      categoryTypeId: 2,
      categoryName: "CategoryStreaming",
      categoryObject: CategoryStreaming,
    },
  ];
  let Menu = [
    { menuId: 1, name: "Movies", categoryTypeId: 1 },
    { menuId: 2, name: "Series", categoryTypeId: 1 },
    { menuId: 3, name: "Documentary", categoryTypeId: 1 },
    { menuId: 4, name: "Streaming", categoryTypeId: 2 },
  ];

  useEffect(()=>{
    console.log("llego a Navigate")
  },[urlApi])
  
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
            {Menu.map((menu) => (
              <li
                key={menu.menuId}
                className="md:flex my-7 pe-8 md:my-0 md:ml-0 text-slate-800 dark:text-slate-200 font-semibold items-center">
                <DropDownList
                  nameMenu={menu.name}
                  select={select}
                  setSelect={setSelect}
                  options={
                    CategoryType.find(
                      (el) => el.categoryTypeId === menu.categoryTypeId
                    ).categoryObject
                  }
                  url={urlApi}                  
                  setUrl={setUrlApi}                  
                />
              </li>
            ))}
          </ul>
          <ImageChangeTheme />
        </div>
      </nav>
    </>
  );
}

export default NavigateBar;
