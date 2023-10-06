import {CalendarDaysIcon} from "@heroicons/react/24/solid";

function Cards({
  imageUrl,
  title,
  rating,
  reviews,
  date,
  idSelection,
  loadingApi,
}) {
  const cardClasses = `max-w-sm rounded-lg relative dark:border-gray-700 ${
    loadingApi ? "bg-[#f0f0f0]" : ""
  }`;

  const cardImage = `mb-2 text-xl font-bold tracking-tight  ${
    loadingApi
      ? "text-gray-900 dark:text-gray-500"
      : "text-gray-900 dark:text-white"
  }`;
  return (
    <>
      <div className={cardClasses}>
        <a
          className={`${loadingApi ? "cursor-progress" : ""}`}
          href={idSelection}
        >
          {loadingApi && (
            <div className="w-220 h-330 bg-gray-300 dark:bg-gray-600 rounded-t-lg inset-0 flex items-center justify-center ">
              <div className="animate-pulse">
                <div className="w-full h-full mt-2 mb-4 bg-gray-300 dark:bg-gray-600 rounded-lg"></div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  <div className="w-full h-20 mt-2 mb-4 bg-gray-300 dark:bg-gray-600 rounded-lg"></div>
                </div>
              </div>
            </div>
          )}

          <img
            className={`rounded-t-lg h-auto ${loadingApi ? "hidden" : ""}`}
            src={imageUrl}
            alt=""
          />

          <div className="p-5">
            <h3 className={cardImage}>{loadingApi ? "Loading..." : title}</h3>
            {loadingApi ? (
              <div className="animate-pulse">
                <div className="w-full h-4 mt-2 mb-4 bg-gray-300 dark:bg-gray-600 rounded-lg"></div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  <div className="w-full h-4 mt-2 mb-4 bg-gray-300 dark:bg-gray-600 rounded-lg"></div>
                  <div className="w-full h-4 mt-2 mb-4 bg-gray-300 dark:bg-gray-600 rounded-lg"></div>
                </div>
                <div className="w-20 h-4 mt-2 ml-8 bg-gray-300 dark:bg-gray-600 rounded-lg"></div>
              </div>
            ) : (
              <>
                <div className="flex items-center">
                  <svg
                    className="w-4 h-4 text-yellow-300 mr-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <p className="ml-2 text-sm font-bold text-gray-900 dark:text-white">
                    {rating}
                  </p>
                  <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
                  <p className="text-sm font-medium text-gray-900 underline hover:no-underline dark:text-white">
                    {reviews} reviews
                  </p>
                </div>
                <div className="flex items-center pt-1 pl-7">
                  <CalendarDaysIcon className="w-4 h-4" title="Release Date" />
                  <p className="text-sm pl-1 font-medium text-gray-700 dark:text-slate-300">
                    {date} 
                  </p>
                </div>
              </>
            )}
          </div>
        </a>
      </div>
    </>
  );
}

export default Cards;
