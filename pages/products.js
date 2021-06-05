import { Fragment, useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import ProductForm from "../components/products/ProductForm";
import ProductList from "../components/products/ProductList";
import Api from "../constants/api";

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
  const [products, setProducts] = useState([]);

  useEffect(async () => {
    const res = await Api.get({
      url: "/api/products",
      data: {},
    });
    const products = await res.json();
    setProducts(products);
  }, [products]);

  const calcCount = () => setCount(count + 1);
  const addItem = (item) => setProducts((products) => [item, ...products]);

  return (
    <Fragment>
      <Grid item xs={12} md={6} lg={3}>
      {JSON.stringify(products)}
        <Paper className={classes.paper}>
          <ProductForm addItem={addItem} />
        </Paper>
      </Grid>
      <Grid item xs={12} md={6} lg={9}>
        <button onClick={() => calcCount()}>Plus 1</button>
        <Paper className={classes.paper}>
          <ProductList count={count} products={products} />
        </Paper>
      </Grid>
    </Fragment>
  );
}

export default Products;
