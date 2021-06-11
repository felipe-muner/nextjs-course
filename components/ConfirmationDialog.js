import { useState } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import PropTypes from "prop-types";
import Api from "../constants/api";

export default function ConfirmationDialog({
  open,
  onClose,
  selected,
  initComp,
}) {
  const handleClose = async (val) => {
    if (val) {
      const res = await Api.product.update({
        ...selected,
        active: !selected.active,
      });
      initComp();
    }

    onClose();
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={onClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Confirm to delete?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {JSON.stringify(selected)}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleClose(false)} color="primary">
            Disagree
          </Button>
          <Button onClick={() => handleClose(true)} color="primary" autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

// ConfirmationDialog.propTypes = {
//   onClose: PropTypes.func.isRequired,
//   open: PropTypes.bool.isRequired,
//   selected: PropTypes.object.isRequired,
// };
