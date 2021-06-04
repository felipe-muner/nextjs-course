import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";

function ProductForm(props) {
  console.log(props);
  async function handleSubmit(event) {
    event.preventDefault();
    const res = await fetch("/api/products", {
      body: JSON.stringify({
        name: event.target.name.value,
        price: event.target.price.value,
        category: event.target.category.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    console.log(await res.json());
  }

  return (
    <Box>
      <form onSubmit={handleSubmit}>
        <Box>
          <TextField id="name" label="Name" fullWidth autoComplete="none" />
        </Box>
        <Box>
          <TextField id="price" label="Price" fullWidth autoComplete="none" />
        </Box>
        <Box>
          <TextField
            id="category"
            label="Category"
            fullWidth
            autoComplete="none"
          />
        </Box>
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
