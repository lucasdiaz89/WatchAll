import React, { useState } from "react";
import DropDownList from "./DropDownList";
import ImageChangeTheme from "./ImageChangeTheme";
import { FilmIcon, Bars4Icon } from "@heroicons/react/24/solid";

function NavigateBar(props) {
  const [menuOpen, setMenuOpen] = useState(false);

  let CategoryGender = [
    { id: 1, name: "Action", categoryGenderId: "28" },
    { id: 2, name: "Adventure", categoryGenderId: "12" },
    { id: 3, name: "Comedy", categoryGenderId: "35" },
    { id: 4, name: "Documentary", categoryGenderId: "99" },
    { id: 5, name: "Drama", categoryGenderId: "18" },
    { id: 6, name: "Horror", categoryGenderId: "27" },
    { id: 7, name: "Romance", categoryGenderId: "10749" },
    { id: 8, name: "War", categoryGenderId: "10752" },
  ];

  let CategoryStreaming = [
    {
      id: 1,
      name: "Netflix",
      url: "",
      headerKey: "",
    },
    { id: 2, name: "HBO MAX", url: "" },
    { id: 3, name: "Star+", url: "" },
    { id: 4, name: "Disney+", url: "" },
    { id: 5, name: "Prime Video", url: "" },
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

  let FilterUrl = [
    {
      filterUrlId: 1,
      filterUrlName: "generic url",
      urlFilter: "https://api.themoviedb.org/3/discover/",
      filterUrlCategoryTypeName: "",
      filterUrlCategoryGenderId: "",
      filterUrlParams: {
        include_adult: "false",
        include_video: "false",
        language: "en-US",
        page: "1",
        sort_by: "popularity.desc",
        whit_genres: "",
      },
      filterUrlImage: "https://image.tmdb.org/t/p/w220_and_h330_face",
      filterHeaderKey:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZThhM2Y0YmNiMTAyYTlmNWMzNDFjOTI2MzE4NDY4ZSIsInN1YiI6IjY1MTQyMWE1Y2FkYjZiMDJjMWQwMTZkOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ppSO9fAZwRBNBHCVa50JvbdWa9iUn1fSbm98knMcCeg",
    },
    {
      filterUrlId: 2,      
      urlFilter: "",
      filterUrlName: "streaming url",
      filterUrlCategoryTypeName: "",
      filterUrlCategoryGenderId: "",
      params: {
        include_adult: false,
        include_video: false,
        language: "en-US",
        page: 1,
        sort_by: "popularity.desc",
        whit_genres: "",
      },
      filterUrlImage: "https://image.tmdb.org/t/p/w220_and_h330_face",
      filterHeaderKey: "Bearer ",
    },
  ];

  let Menu = [
    {
      menuId: 1,
      name: "Movies",
      categoryTypeName: "movie",
      categoryTypeId: 1,
      filterUrlId: 1,
    },
    {
      menuId: 2,
      name: "Series",
      categoryTypeName: "serie",
      categoryTypeId: 1,
      filterUrlId: 1,
    },
    {
      menuId: 3,
      name: "TV",
      categoryTypeName: "tv",
      categoryTypeId: 1,
      filterUrlId: 1,
    },
    {
      menuId: 4,
      name: "Streaming",
      categoryTypeName: "streaming",
      categoryTypeId: 2,
      filterUrlId: 2,
    },
  ];

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handlePrimaryPage = () => {
    window.location.reload();
  };

  return (
    <nav className="shadow-md w-full border border-slate-800 bg-slate-200 rounded-md dark:bg-slate-800 dark:border-slate-200">
      <div className="md:px-10 py-4 px-7 md:flex justify-between items-center">
        <div className="flex text-2xl cursor-pointer items-center gap-2">
          <FilmIcon className="w-7 h-7 text-slate-800 dark:text-emerald-400" />
          <span
            onClick={handlePrimaryPage}
            className="font-bold text-slate-800 dark:text-slate-200"
          >
            WATCH ALL
          </span>
        </div>

        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-slate-800 dark:text-slate-200"
          >
            <Bars4Icon className="w-6 h-6" />
          </button>
        </div>

        <ul
          className={`${
            menuOpen ? "block" : "hidden"
          } md:flex md:space-x-4  pr-9 md:pl-0`}
        >
          {Menu.map((menu) => (
            <li
              key={menu.menuId}
              className="md:flex my-7 pe-8 md:my-0 md:ml-0 text-slate-800 dark:text-slate-200 font-semibold items-center"
            >
              <DropDownList
                Menu={menu}
                options={
                  CategoryType.find(
                    (el) => el.categoryTypeId === menu.categoryTypeId
                  ).categoryObject
                }
                url={FilterUrl.find(
                  (el) => el.filterUrlId === menu.filterUrlId
                )}
              />
            </li>
          ))}
        </ul>
        <div className="absolute top-4 right-4 md:relative md:top-auto md:right-auto">
          <ImageChangeTheme />
        </div>
      </div>
    </nav>
  );
}

export default NavigateBar;
