import NavigateBar from "./components/NavigateBar";
import Footer from "./components/Footer";
import BodyApp from "./components/BodyApp";
import { createContext,useContext, useEffect, useState } from "react";

function App() {
  const [url, setUrl] = useState(null);
  const UrlContext = createContext();

  const updateUrl = (newUrl) => {
    setUrl(newUrl);
  };
  console.log("App");

  useEffect(() => {
    console.log("llego de nuevo a APP");
  }, [url]);

  return (
    <>
      <UrlContext.Provider value={{url,updateUrl}}>
        <NavigateBar />
        <div className="h-screen flex justify-center bg-slate-200 text-slate-800 dark:bg-slate-800 dark:text-slate-200">
          {url && <BodyApp />}
        </div>
        <Footer />
      </UrlContext.Provider>
    </>
  );
}

export default App;
