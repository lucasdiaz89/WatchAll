import { ContextUrl } from "./StoreUrl";
import { useFetch } from "./useFetch";
import { useContext } from "react";

function BodyApp(props) {

 const [stateLink,setStateLink]=useContext(ContextUrl); 


  const { data, loading, error, handleCancelRequest } = useFetch(stateLink.url);
  return (
    <>
      <button onClick={handleCancelRequest}>Cancel Request</button>
      <ul className="card">
        {error && <li>Error: {error}</li>}
        {loading && <li>Loading...</li>}
        {data?.map((item) => (
          <li key={item.id}>{item.id}</li>
        ))}
      </ul>
    </>
  );
}

export default BodyApp;
