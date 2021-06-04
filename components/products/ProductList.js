import { useState, useEffect } from "react";
import Api from "../../constants/api";

function ProductList() {
  const [data, setData] = useState({ products: [] });

  useEffect(async () => {
    const res = await Api.get({ url: "/api/products", data: { method: 'getAll' } });
    const products = await res.json();
    console.log(products);
    setData(products);
  }, []);

  return <div>{JSON.stringify(data.products)}</div>;
}

export default ProductList;
