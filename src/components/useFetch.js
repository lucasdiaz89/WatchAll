import { useState, useEffect } from "react";

export function useFetch(stateLink) {
  const [data, setData] = useState({ results: [] });  
  const [loadingApi, setLoadingApi] = useState(true);
  const [errorApi, setErrorApi] = useState(null);
  const errorComingSoon = "";
 
  useEffect(() => {

    console.log("entra al useEfect Fetch");
    
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: stateLink.headerKey,
      },
    };
    
    stateLink.params.whit_genres = stateLink.categoryGenderId;
    
    const newUrl =`${stateLink.url}${stateLink.categoryTypeName}?${new URLSearchParams(stateLink.params)}`;
    setData({ results: [] });

    if (newUrl !=null) {
      const delay = 3000;
      
      setLoadingApi(true);
      const fetchData = () => {
        setData({ results: [] });
        fetch(newUrl, options)
          .then((response) => response.json())
          .then((json) => {
            setData(json);
            setLoadingApi(false);
            setErrorApi("");
          })
          .catch((error) => {
            setErrorApi(errorApi);
            setLoadingApi(false);
          });
      };
      console.log(data)
      const timeoutId = setTimeout(fetchData, delay);
      return () => clearTimeout(timeoutId);
    } else {
      setErrorApi("ComingSoon");
      setData({ results: [] });
      setLoadingApi(false);
    }
  }, [stateLink]);

  return { data, loadingApi, errorApi };
}
