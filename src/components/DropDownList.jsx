import { useEffect, useRef, useState } from "react";

function DropDownList(props) {
  const [isActive, setIsActive] = useState(false);
  const [isHoverDDL, setIsHoverDDL] = useState(false);
  const refList = useRef(null);

  const nameMenu = props.nameMenu;
  const select = props.select;
  const setSelect = props.setSelect;
  const options = props.options;

  useEffect(() => {
    setIsActive(false);
  }, [isHoverDDL]);

  const handlerIsActive = () => {
    setIsActive(!isActive);
  };
  const handlerIsHoverDDL = () => {
    setIsHoverDDL(!isHoverDDL);
  };
  /*{document.addEventListener(`click`, (evt) => {
    const cur = refList;
    const node = evt.target;
    refList.current && !refList.current.contains(evt.target)?setIsActive(false) : setIsActive(false);

  })}  */
  return (
    <>
     
      <button onClick={() => handlerIsActive()}>{nameMenu}</button>

      {isActive && (
        <div
        ref={refList}        
          onMouseLeave={() => handlerIsHoverDDL()}
          id={nameMenu}
          className="fixed top-11 bg-white rounded-lg shadow dark:bg-gray-700 "
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
                    setSelect(options.id);
                    setIsActive(false);
                  }}
                  href={options.link}
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
