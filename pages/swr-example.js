import useSWR from "swr";
import Api from "../constants/api";
const fetcher = (...args) => fetch(...args).then((res) => res.json());

function SWRExample() {
  const { data } = useSWR("/api/products", fetcher);
  console.log(data);
  const getProduct = async () => {
    const res = await Api.product.getAll();
    console.log(res);
  };
  const addProduct = async () => {
    const query = {name: Math.random()};
    const res = await Api.product.add(query);
    console.log(res);
  };

  const arr = [1, 2, 3, 4, 5, 6];

  const listItems = data?.map((item) => (
    <li key={item.id.toString()}>{item.name}</li>
  ));

  return (
    <div>
      <div>SWRExample123</div>
      <button onClick={addProduct}>addProduct</button>
      <button onClick={getProduct}>getAll</button>
      <div>
        {JSON.stringify(data)}
        <hr />
        <ul>{listItems}</ul>
        <hr />
        {arr.map((el) => (
          <p key={el}>{el}</p>
        ))}
      </div>
    </div>
  );
}

export default SWRExample;
