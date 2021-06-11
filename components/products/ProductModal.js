import { useState } from "react";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import PropTypes from "prop-types";
import Api from "../../constants/api";

export default function ProductModal({ open, onClose, selected, label, addItem }) {
  const handleClose = (val) => {
    if (val) {
      console.log("agree");
    }
  };
  const initialState = {
    name: "",
    price: "",
    category: "",
    amount: "",
  }

  const [query, setQuery] = useState(initialState);

  // Update inputs value
  const handleParam = () => (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);
    setQuery((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  async function handleSubmit(event) {
    event.preventDefault();

    const res = await Api.post({
      url: "/api/products",
      data: query,
    });

    setQuery(initialState);
    console.log(await res.json());
    addItem(query)
    
  }

  return (
    <div>
      <Dialog
        open={open}
        onClose={onClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{label + " product"}</DialogTitle>
        <DialogContent>
        <form onSubmit={handleSubmit}>
              <Box my={2}>
                <TextField
                  required
                  name="name"
                  type="text"
                  label="Name"
                  fullWidth
                  autoComplete="none"
                  value={query.name}
                  onChange={handleParam()}
                  variant="outlined"
                />
              </Box>
              <Box my={2}>
                <TextField
                  required
                  name="price"
                  type="number"
                  label="Price"
                  fullWidth
                  autoComplete="none"
                  value={query.price}
                  onChange={handleParam()}
                  variant="outlined"
                />
              </Box>
              <Box my={2}>
                <TextField
                  required
                  name="category"
                  type="text"
                  label="Category"
                  fullWidth
                  autoComplete="none"
                  value={query.category}
                  onChange={handleParam()}
                  variant="outlined"
                />
              </Box>
              <Box my={2}>
                <TextField
                  required
                  name="amount"
                  type="number"
                  label="Amount"
                  fullWidth
                  autoComplete="none"
                  value={query.amount}
                  onChange={handleParam()}
                  variant="outlined"
                />
              </Box>
              <Box mt={2}>
                <Button fullWidth variant="contained" color="primary" type="submit">
                  Submit
                </Button>
              </Box>
            </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}

// ConfirmationDialog.propTypes = {
//   onClose: PropTypes.func.isRequired,
//   open: PropTypes.bool.isRequired,
//   el: PropTypes.object.isRequired,
// };
