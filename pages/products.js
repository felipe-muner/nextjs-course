import { Fragment, useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Box from "@material-ui/core/Box";
import Tooltip from "@material-ui/core/Tooltip";
import Zoom from "@material-ui/core/Zoom";
import ViewList from "@material-ui/icons/ViewList";
import ViewWeekRoundedIcon from "@material-ui/icons/ViewWeekRounded";
import Add from "@material-ui/icons/Add";

import ProductList from "../components/products/ProductList";
import ProductCard from "../components/products/ProductCard";
import Api from "../constants/api";

import { useCount, useDispatchCount } from "../store/context";

const useStyles = makeStyles((theme) => {
  return {
    root: {
      between: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
    felipe: {
      marginLeft: 5,
    },
  };
});

function Products() {
  const classes = useStyles();
  const [products, setProducts] = useState([]);
  const [isTableView, setIsTableView] = useState(true);
  const [isModalOpen, setisModalOpen] = useState(false);

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

  const openModal = () => setCount(count + 1);
  // const addItem = (item) => setProducts((products) => [item, ...products]);

  // const handleIncrease = (event) =>
  //   dispatch({
  //     type: "INCREASE",
  //   });
  // const toggleView = (val) => setIsTableView((products) => [item, ...products]);

  return (
    <Fragment m={0}>
      <Grid item container xs={12} md={12} lg={6}>
        <Box xs={12}>
          <ButtonGroup
            color="secondary"
            aria-label="outlined primary button group"
          >
            <Tooltip title="List View">
              <Button variant="contained" startIcon={<ViewList />}>
                List
              </Button>
            </Tooltip>

            <Tooltip title="Card View">
              <Button variant="contained" startIcon={<ViewWeekRoundedIcon />}>
                Card
              </Button>
            </Tooltip>
          </ButtonGroup>
        </Box>
        <Box ml={2} xs={12}>
          <Tooltip title="Add">
            <Button variant="contained" color="secondary" startIcon={<Add />}>
              Add
            </Button>
          </Tooltip>
        </Box>
      </Grid>

      <Grid>{isModalOpen}</Grid>
      <Grid item xs={12} md={12} lg={12}>
        {isTableView ? <ProductList products={products} /> : <ProductCard />}
      </Grid>
    </Fragment>
  );
}

export default Products;
