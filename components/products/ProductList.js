import { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";

import Tooltip from "@material-ui/core/Tooltip";
import Fab from "@material-ui/core/Fab";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import Fade from "@material-ui/core/Fade";

import Api from "../../constants/api";

const useStyles = makeStyles((theme) => ({
  fab: {
    margin: theme.spacing(2),
  },
  table: {
    minWidth: 650,
  }
}));

function ProductList() {
  const [data, setData] = useState({ products: [] });

  useEffect(async () => {
    const res = await Api.get({
      url: "/api/products",
      data: { method: "getAll" },
    });
    const products = await res.json();
    setData(products);
  }, []);

  const classes = useStyles();

  const handleEdit = (item) => {
    console.log("The Values that you wish to edit ", item);
  };

  const handleDelete = (item) => {
    console.log("The Values that you wish to delete ", item);
  };

  return (
    <Box>
      <Box>
        <h3>Product list</h3>
      </Box>
      <Box>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Category</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.products.map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.category}</TableCell>
                <TableCell align="right">{row.price}</TableCell>
                <TableCell align="right">
                  <Tooltip
                    title="Edit"
                    aria-label="edit"
                    placement="top"
                    arrow
                    TransitionComponent={Fade}
                    TransitionProps={{ timeout: 600 }}
                  >
                    <Fab size="small" color="primary" className={classes.fab}>
                      <EditIcon onClick={() => handleEdit(row)} />
                    </Fab>
                  </Tooltip>
                  <Tooltip
                    title="Delete"
                    aria-label="delete"
                    placement="top"
                    arrow
                    TransitionComponent={Fade}
                    TransitionProps={{ timeout: 600 }}
                  >
                    <Fab size="small" color="error" className={classes.fab}>
                      <DeleteIcon onClick={() => handleDelete(row)} />
                    </Fab>
                  </Tooltip>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </Box>
  );
}

export default ProductList;
