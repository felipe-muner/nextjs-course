import useSWR, { trigger, mutate } from "swr";

import { makeStyles } from "@material-ui/core/styles";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

//trigger get data again
//mutate, get cache first and get data again
import Api from "../constants/api";
const fetcher = (...args) => fetch(...args).then((res) => res.json());

function ShowLength() {
  //can pass prop but just to do the exercise
  const { data } = useSWR("/api/products", fetcher);
  return <h1> {data?.length}</h1>;
}

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 400,
    maxWidth: 500
  },
  tableRow: {
    height: 10,
  },
  tableCell: {
    padding: "0px 16px",
  },
}));

function SWRExample() {
  const { data } = useSWR("/api/products", fetcher);
  const classes = useStyles();

  const getProduct = async () => {
    const res = await Api.product.getAll();
    console.log(res);
  };
  const addProduct = async () => {
    const query = { name: Math.random() };
    mutate("/api/products", [...data, query], false);
    const res = await Api.product.add(query);
    trigger("/api/products");
    console.log(res);
  };

  const listItems = data?.map((item) => (
    <li key={item.name.toString()}>{item.name}</li>
  ));

  return (
    <div>
      <div>SWRExample123</div>

      <button onClick={addProduct}>addProduct</button>
      <button onClick={getProduct}>getAll</button>
      <div>
        {JSON.stringify(data)}
        <hr />

      </div>
      <div>
        <TableContainer>
          <Table
            className={classes.table}
            aria-label="simple table"
            size="small"
          >
            <TableHead>
              <TableRow className={classes.tableRow}>
                <TableCell className={classes.tableCell}>Name</TableCell>
                <TableCell className={classes.tableCell} align="left">
                  id
                </TableCell>
                <TableCell
                  className={classes.tableCell}
                  align="right"
                >active</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data?.map((row) => (
                <TableRow key={row.name.toString()} className={classes.tableRow}>
                  <TableCell
                    className={classes.tableCell}
                    component="th"
                    scope="row"
                  >
                    {row.name}
                  </TableCell>
                  <TableCell className={classes.tableCell} align="left">
                    {row.id}
                  </TableCell>
                  <TableCell className={classes.tableCell} align="left">
                    {row.active ? "Active" : "Loading..."}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <div>
        Length: <ShowLength />
      </div>
    </div>
  );
}

export default SWRExample;
