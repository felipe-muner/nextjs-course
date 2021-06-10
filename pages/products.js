import { Fragment, useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import EditIcon from "@material-ui/icons/Edit";
import StorageIcon from "@material-ui/icons/Storage";

import ProductList from "../components/products/ProductList";
import ProductCard from "../components/products/ProductCard";
import Api from "../constants/api";

import { useCount, useDispatchCount } from "../store/context";

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
    button: {
      // main styles,
      "&.active": {
        background: "black",
      },
    },
  };
});

function Products() {
  const classes = useStyles();
  const [products, setProducts] = useState([]);
  const [isTableView, setIsTableView] = useState(true);

  const count = useCount();
  const dispatch = useDispatchCount();

  useEffect(() => {
    async function fetchMyAPI() {
      const res = await Api.get({
        url: "/api/products",
        data: {},
      });
      const products = await res.json();
      setProducts(products);
    }
    fetchMyAPI();
  }, []);

  // const calcCount = () => setCount(count + 1);
  // const addItem = (item) => setProducts((products) => [item, ...products]);

  // const handleIncrease = (event) =>
  //   dispatch({
  //     type: "INCREASE",
  //   });
  // const toggleView = (val) => setIsTableView((products) => [item, ...products]);

  return (
    <Fragment>
      <Grid item xs={12} md={12} lg={12}>
        <ButtonGroup
          variant="contained"
          color="primary"
          aria-label="outlined primary button group"
        >
          {/* className={isActive ? 'your_className': null} */}
          <Button
            className={isTableView ? "active" : null}
            onClick={() => setIsTableView(true)}
          >
            <StorageIcon />
          </Button>
          <Button
            className={!isTableView ? "active" : null}
            onClick={() => setIsTableView(false)}
          >
            <EditIcon />
          </Button>
        </ButtonGroup>
      </Grid>
      <Grid item xs={12} md={12} lg={12}>
        <Paper className={classes.paper}>
          {isTableView ? <ProductList products={products} /> : <ProductCard />}
        </Paper>
      </Grid>
    </Fragment>
  );
}

export default Products;
