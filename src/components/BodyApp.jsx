import { useFetch } from "./useFetch";
import { useContext } from "react";

function BodyApp(props) {
  console.log("bodyAPp");
  const url = useContext(UrlContext);
  console.log(url);

  const { data, loading, error, handleCancelRequest } = useFetch(url);
  return (
    <>
      <button onClick={handleCancelRequest}>Cancel Request</button>
      <ul className="card">
        {error && <li>Error: {error}</li>}
        {loading && <li>Loading...</li>}
        {data?.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </>
  );
}

export default BodyApp;
