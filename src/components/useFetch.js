import { useState, useEffect } from "react";

export function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [controller, setController] = useState(null);
const errorComingSoon="";
  useEffect(() => {
    const abortController = new AbortController();
    setController(abortController);
    if (url != "") {
      fetch(url, { signal: abortController.signal })
        .then((response) => response.json())
        .then((json) => setData(json))
        .catch((error) => {
          if (error.name != "AbortError") {
            setError(error);
          }
        })
        .finally(() => {
          setLoading(false)
          setError("")
        });

      return () => abortController.abort();
    }
    else{
      setError("ComingSoon");
      setData(null);
      setLoading(false);
    }
    
  }, [url]);

  const handleCancelRequest = () => {
    if (controller) {
      controller.abort();
      setError("Cancelled Request");
    }
  };

  return { data, loading, error, handleCancelRequest };
}
