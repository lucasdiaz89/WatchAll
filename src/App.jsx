import "./App.css";
import NavigateBar from "./components/NavigateBar"
import Footer from "./components/Footer"

function App() {
  let [onClickOutside, setShowInfo1] = useState(false);
  return (
    <>
      <NavigateBar/>
      <div className="h-screen flex justify-center bg-slate-200 text-slate-800 dark:bg-slate-800 dark:text-slate-200">


      </div>
      <Footer/>
    </>
  );
}

export default App;
