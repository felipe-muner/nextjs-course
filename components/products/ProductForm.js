import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

function ProductForm() {
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
    })

    console.log(await res.json());
  }

  return (
    <form onSubmit={handleSubmit}>
      <TextField id="name" label="Name" fullWidth autoComplete="none" />
      <TextField id="price" label="Price" fullWidth autoComplete="none" />
      <TextField id="category" label="Category" fullWidth autoComplete="none" />
      <Button type="submit">Submit</Button>
    </form>
  );
}

export default ProductForm;
