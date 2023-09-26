import NavigateBar from "./components/NavigateBar";
import Footer from "./components/Footer";
import BodyApp from "./components/BodyApp";
import StoreUrl from "./components/StoreUrl"

function App() {

  return (
    <>
      <StoreUrl>
        <NavigateBar />
        <div className="h-screen flex justify-center bg-slate-200 text-slate-800 dark:bg-slate-800 dark:text-slate-200">
           <BodyApp />
        </div>
        <Footer />
      </StoreUrl>
    </>
  );
}

export default App;
