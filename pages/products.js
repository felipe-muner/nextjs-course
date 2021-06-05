import { Fragment, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import ProductForm from "../components/products/ProductForm";
import ProductList from "../components/products/ProductList";

const useStyles = makeStyles((theme) => {
  return {
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
  };
});

function Products() {
  const classes = useStyles();
  const [count, setCount] = useState(0);

  const [products, setProducts] = useState([
    { name: "felipe" },
    { name: "felipe2" },
  ]);

  const calcCount = () => setCount(count + 1);
  const addItem = (item) => setProducts((products) => [item, ...products]);

  return (
    <Fragment>
      <Grid item xs={3}>
        {JSON.stringify(products)}
        <Paper className={classes.paper}>
          <ProductForm addItem={addItem} />
        </Paper>
      </Grid>
      <Grid item xs={9}>
        <button onClick={() => calcCount()}>Plus 1</button>
        <Paper className={classes.paper}>
          <ProductList count={count} />
        </Paper>
      </Grid>
    </Fragment>
  );
}

export default Products;
