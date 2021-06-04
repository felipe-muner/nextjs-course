import { useState } from "react";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";

function ProductForm(props) {
  const [query, setQuery] = useState({
    name: "",
    price: 0,
    category: "",
  });

  // Update inputs value
  const handleParam = () => (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setQuery((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  async function handleSubmit(event) {
    event.preventDefault();
    try {
      return await fetch("/api/products", {
        body: JSON.stringify(query),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      }).then(async (res) => {
        console.log(await res.json())
        setQuery({ name: "", price: "", category: "" })
      });
    } catch (error) {
      console.log(error)
    }    

    // console.log(await res.json());
  }

  return (
    <Box>
      <form onSubmit={handleSubmit}>
        <Box>
          <TextField
            name="name"
            label="Name"
            fullWidth
            autoComplete="none"
            value={query.name}
            onChange={handleParam()}
          />
        </Box>
        <Box>
          <TextField
            name="price"
            label="Price"
            fullWidth
            autoComplete="none"
            value={query.price}
            onChange={handleParam()}
          />
        </Box>
        <Box>
          <TextField
            name="category"
            label="Category"
            fullWidth
            autoComplete="none"
            value={query.category}
            onChange={handleParam()}
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

export default ProductForm;
