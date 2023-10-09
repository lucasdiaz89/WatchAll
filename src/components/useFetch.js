import { useState, useEffect } from "react";

export function useFetch(stateLink) {
  const [data, setData] = useState({ results: [] });  
  const [loadingApi, setLoadingApi] = useState(true);
  const [errorApi, setErrorApi] = useState(null);
  const errorComingSoon = "";
 
  useEffect(() => {

    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: stateLink.headerKey,
      },
    };
    
    stateLink.params.whit_genres =stateLink.categoryGenderId;
    
    const params=new URLSearchParams(stateLink.params)
    const newUrl =`${stateLink.url}${stateLink.categoryTypeName}?${params}`;

    const obligator="include_adult="+stateLink.params.include_adult+"&include_video="+stateLink.params.include_video+"&language="+stateLink.params.language+"&page="+stateLink.params.page+"&sort_by="+stateLink.params.sort_by+"&with_genres="
    
    const newNewUrl=stateLink.url + stateLink.categoryTypeName+"?"+obligator+stateLink.categoryGenderId;

    console.log("new URL:"+newUrl);
    console.log("New New URL:"+newNewUrl);
    setData({ results: [] });

    if (newUrl !=null) {
      const delay = 3000;
      
      setLoadingApi(true);
      const fetchData = () => {
        setData({ results: [] });
        fetch(newNewUrl, options)
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
