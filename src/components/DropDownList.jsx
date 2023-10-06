import { useEffect, useState, useContext } from "react";
import { ContextUrl } from "./StoreUrl";

function DropDownList(props) {

  const [isActive, setIsActive] = useState(false);
  const [isHoverDDL, setIsHoverDDL] = useState(false);
  const [state, setState] = useContext(ContextUrl);

  const menu = props.Menu;
  const options = props.options;
  const urlLink = props.url;

  console.log("DDL link props");
  console.log(urlLink);

  useEffect(() => {
    setIsActive(false);
  }, [isHoverDDL]);

  const handlerIsActive = () => {
    setIsActive(!isActive);
  };
  const handlerIsHoverDDL = () => {
    setIsHoverDDL(!isHoverDDL);
  };

  const handleUrlLink = (urlNew, urlLink, menu) => {
    console.log("handleURLink . urlNew urlLink . menu");
    console.log(urlNew);
    console.log(urlLink);
    console.log(menu);
    const urlChange = {
      url: urlLink.urlFilter,
      name: urlLink.filterUrlName,
      categoryTypeName: menu.categoryTypeName,
      categoryGenderId: urlNew.categoryGenderId,
      params: {
        include_adult: urlLink.filterUrlParams.include_adult,
        include_video: urlLink.filterUrlParams.include_video,
        language: urlLink.filterUrlParams.language,
        page: urlLink.filterUrlParams.page,
        sort_by: urlLink.filterUrlParams.sort_by,
        whit_genres:  urlNew.categoryGenderId  
      },
      urlImage: urlLink.filterUrlImage,
      headerKey:urlLink.filterHeaderKey,
    };
    setState(urlChange);
  };

  return (
    <>
      <button onClick={() => handlerIsActive()}>{menu.name}</button>

      {isActive && (
        <div
          onMouseLeave={() => handlerIsHoverDDL()}
          id={menu.menuId}
          className="fixed top-11 cursor-pointer absolute z-10 bg-white rounded-lg shadow dark:bg-gray-700 "
        >
          <ul
            className="overflow-y-auto text-gray-700 dark:text-gray-200 "
            aria-labelledby="dropdownUsersButton"
          >
            {options.map((options) => (
              <li
                key={options.id}
                className="md:flex text-slate-800 dark:text-slate-200 font-semibold items-center hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                <a
                  onClick={() => {
                    setIsActive(false);
                    handleUrlLink(options, urlLink, menu);
                  }}
                  className="flex items-center px-2 py-2 "
                >
                  {options.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}

export default DropDownList;
