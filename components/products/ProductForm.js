import { useState } from "react";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Api from "../../constants/api";

function ProductForm({ newItem }) {
  const [query, setQuery] = useState({
    name: "",
    price: 0,
    category: "",
  });

  // Update inputs value
  const handleParam = () => (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);
    setQuery((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  async function handleSubmit(event) {
    event.preventDefault();
    query.method = "addProduct";
    const res = await Api.post({
      url: "/api/products",
      data: query,
    });

    setQuery({ name: "", price: "", category: "" });
    console.log(await res.json());
    newItem()
  }

  return (
    <Box>
      <Box>
        <h3>Add Product</h3>
      </Box>
      <form onSubmit={handleSubmit}>
        <Box my={2}>
          <TextField
            name="name"
            label="Name"
            fullWidth
            autoComplete="none"
            value={query.name}
            onChange={handleParam()}
            variant="outlined"
          />
        </Box>
        <Box my={2}>
          <TextField
            name="price"
            label="Price"
            fullWidth
            autoComplete="none"
            value={query.price}
            onChange={handleParam()}
            variant="outlined"
          />
        </Box>
        <Box my={2}>
          <TextField
            name="category"
            label="Category"
            fullWidth
            autoComplete="none"
            value={query.category}
            onChange={handleParam()}
            variant="outlined"
          />
        </Box>
        {JSON.stringify(query)}
        <Box mt={2}>
          <Button variant="contained" color="primary" type="submit">
            Submit
          </Button>
        </Box>
      </form>
    </Box>
  );
}

// export async function getStaticProps(context) {
//   console.log(context)
//   const res = await fetch("/api/products", { qs: { a: 1, b: 2 } });
//   const produtcs = await res.json();
//   console.log(produtcs);
//   return {
//     revalidate: 10,
//     props: {
//       produtcs,
//     },
//   };
// }

export default ProductForm;
