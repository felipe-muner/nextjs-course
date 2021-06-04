import { useState, useEffect } from "react";

function ProductList() {
  const [data, setData] = useState({ products: [] });

  useEffect(async () => {
    console.log("felipelist");
    const res = await fetch(
      "/api/products?" +
        new URLSearchParams({
          method: "getAll",
        })
    );
    const products = await res.json()
    console.log(products)
    setData(products)
  }, []);

  return <div>{JSON.stringify(data.products)}</div>;
}

export default ProductList;
