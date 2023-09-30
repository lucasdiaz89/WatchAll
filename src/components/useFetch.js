import { useState, useEffect } from "react";

export function useFetch(Api) {
  const [data, setData] = useState({ results: [] });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const errorComingSoon="";

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: Api.headerKey
    }
  };


  useEffect(() => {
    if (Api.url != "") {
      fetch(Api.url, options)
        .then((response) => response.json())
        .then((json) => setData(json))
        .catch((error) => {         
            setError(error);          
        })
        .finally(() => {
          setLoading(false)
          setError("")
        });      
    }
    else{
      setError("ComingSoon");
      setData({ results: [] });
      setLoading(false);
    }
    
  }, [Api]);




  return { data, loading, error };
}
