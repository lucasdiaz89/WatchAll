import NavigateBar from "./components/NavigateBar";
import Footer from "./components/Footer";
import BodyApp from "./components/BodyApp";
import { useEffect, useState } from "react";

function App() {
  const [url, setUrl] = useState(null);

  console.log("App");
  
  useEffect(() => {
    console.log("llego de nuevo a APP");
  }, [url]);

  return (
    <>
      <NavigateBar urlNew={url} setUrl={setUrl} />
      <div className="h-screen flex justify-center bg-slate-200 text-slate-800 dark:bg-slate-800 dark:text-slate-200">
        {url && <BodyApp url={url} />}
      </div>
      <Footer />
    </>
  );
}

export default App;
