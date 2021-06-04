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
    console.log(await res.json());
  });

  return <div>{data.products}</div>;
}

export default ProductList;
