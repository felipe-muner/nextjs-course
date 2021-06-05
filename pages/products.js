import { Fragment } from "react";
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

  const felipeProp = 'felipe prop'

  return (
    <Fragment>
      <Grid item xs={3}>
        <Paper className={classes.paper}>
          <ProductForm />
        </Paper>
      </Grid>
      <Grid item xs={9}>
        <Paper className={classes.paper}>
          <ProductList felipe={felipeProp} />
        </Paper>
      </Grid>
    </Fragment>
  );
}

export default Products;
