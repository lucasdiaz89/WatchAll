import { useFetch } from "./useFetch";

function BodyApp(props) {
    console.log("bodyAPp")
    console.log(props.url)
    const { data, loading, error, handleCancelRequest } = useFetch(props.url);
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
