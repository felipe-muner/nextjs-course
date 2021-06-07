import { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

import Box from "@material-ui/core/Box";

import Tooltip from "@material-ui/core/Tooltip";
import Fab from "@material-ui/core/Fab";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import Fade from "@material-ui/core/Fade";

import Api from "../../constants/api";
import ConfirmationDialog from "../ConfirmationDialog";

import { useCount } from "../../store/context";

const useStyles = makeStyles((theme) => ({
  fab: {
    margin: theme.spacing(2),
  },
  table: {
    minWidth: 650,
  },
  tableRow: {
    height: 10,
  },
  tableCell: {
    padding: "0px 16px",
  },
}));

function ProductList({ products }) {
  const [openDelete, setOpenDelete] = useState(false);
  const [selected, setSelected] = useState({});

  const classes = useStyles();

  const handleClose = (val) => {
    setOpenDelete(false);
  };

  const handleEdit = (item) => {
    console.log("The Values that you wish to edit ", item);
  };

  const handleDelete = (item) => {
    setSelected(item);
    setOpenDelete(true);
    console.log("The Values that you wish to delete ", item);
  };

  const count = useCount();

  return (
    <Box>
      <Box>
        <ConfirmationDialog
          open={openDelete}
          onClose={handleClose}
          selected={selected}
        />
        <h3>Product list</h3>
        {count}
      </Box>
      <Box>
        <TableContainer>
          <Table
            className={classes.table}
            aria-label="simple table"
            size="small"
          >
            <TableHead>
              <TableRow className={classes.tableRow}>
                <TableCell className={classes.tableCell}>Name</TableCell>
                <TableCell className={classes.tableCell} align="right">
                  Category
                </TableCell>
                <TableCell className={classes.tableCell} align="right">
                  Price
                </TableCell>
                <TableCell
                  className={classes.tableCell}
                  align="right"
                ></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products.map((row) => (
                <TableRow hover key={row.id} className={classes.tableRow}>
                  <TableCell
                    className={classes.tableCell}
                    component="th"
                    scope="row"
                  >
                    {row.name}
                  </TableCell>
                  <TableCell className={classes.tableCell} align="right">
                    {row.category}
                  </TableCell>
                  <TableCell className={classes.tableCell} align="right">
                    {row.price}
                  </TableCell>
                  <TableCell className={classes.tableCell} align="right">
                    <Tooltip
                      m={1}
                      title="Edit"
                      aria-label="edit"
                      placement="top"
                      arrow
                      TransitionComponent={Fade}
                      TransitionProps={{ timeout: 600 }}
                    >
                      <Fab
                        size="small"
                        color="primary"
                        className={classes.fab}
                        onClick={() => handleEdit(row)}
                      >
                        <EditIcon />
                      </Fab>
                    </Tooltip>
                    <Tooltip
                      m={1}
                      title="Delete"
                      aria-label="delete"
                      placement="top"
                      arrow
                      TransitionComponent={Fade}
                      TransitionProps={{ timeout: 600 }}
                    >
                      <Fab
                        size="small"
                        color="secondary"
                        className={classes.fab}
                        onClick={() => handleDelete(row)}
                      >
                        <DeleteIcon />
                      </Fab>
                    </Tooltip>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
}

export default ProductList;
