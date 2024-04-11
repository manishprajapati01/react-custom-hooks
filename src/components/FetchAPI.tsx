import ReactDOM from "react-dom/client";
import useFetch from "../custom-hooks/useFetch";

const FetchAPI = () => {
  const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");

  return (
    <>
      {data &&
        (data as []).map((item: any) => {
          return <p key={item.id}>{item.title}</p>;
        })}
    </>
  );
};

export default FetchAPI;