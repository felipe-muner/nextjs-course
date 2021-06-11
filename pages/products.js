import { Fragment, useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Box from "@material-ui/core/Box";
import Tooltip from "@material-ui/core/Tooltip";
import ViewList from "@material-ui/icons/ViewList";
import ViewWeekRoundedIcon from "@material-ui/icons/ViewWeekRounded";
import Add from "@material-ui/icons/Add";

import ProductList from "../components/products/ProductList";
import ProductCard from "../components/products/ProductCard";
import ProductModal from "../components/products/ProductModal";
import Api from "../constants/api";

// import { useCount, useDispatchCount } from "../store/context";

function Products() {
  const [openModal, setOpenModal] = useState("");
  const [selected, setSelected] = useState({});
  const [isTableView, setIsTableView] = useState("list");

  const [products, setProducts] = useState([]);

  // const count = useCount();
  // const dispatch = useDispatchCount();

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

  const addItem = (item) => setProducts((products) => [item, ...products]);

  // const handleIncrease = (event) =>
  //   dispatch({
  //     type: "INCREASE",
  //   });
  // const toggleView = (val) => setIsTableView((products) => [item, ...products]);
  const handleOpenModal = (val) => {
    setOpenModal(val);
  };

  return (
    <Fragment>
      <Grid item container xs={12} md={12} lg={6}>
        <Box xs={12}>
          <ButtonGroup
            color="secondary"
            aria-label="outlined primary button group"
          >
            <Tooltip title="List View">
              <Button
                variant="contained"
                startIcon={<ViewList />}
                onClick={() => setIsTableView("list")}
              >
                List
              </Button>
            </Tooltip>

            <Tooltip title="Card View">
              <Button
                variant="contained"
                startIcon={<ViewWeekRoundedIcon />}
                onClick={() => setIsTableView("card")}
              >
                Card
              </Button>
            </Tooltip>
          </ButtonGroup>
        </Box>
        <Box ml={2} xs={12}>
          <Tooltip title="Add">
            <Button
              onClick={() => handleOpenModal("add")}
              variant="contained"
              color="secondary"
              startIcon={<Add />}
            >
              Add
            </Button>
          </Tooltip>
        </Box>
      </Grid>
      <Grid item xs={12} md={12} lg={12}>
        {isTableView === "list" ? (
          <ProductList products={products} setOpenModal={handleOpenModal} />
        ) : (
          <ProductCard />
        )}
      </Grid>
      <ProductModal
        open={openModal === "add"}
        label={"Add"}
        onClose={() => setOpenModal("")}
        selected={selected}
        addItem={addItem}
      />
    </Fragment>
  );
}

export default Products;
