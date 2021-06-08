import React, { useContext } from "react";
import { productsStore, productsDispatch } from "../store/store";
import Button from "@material-ui/core/Button";

function Admins() {


  const products = productsStore();
  const dispatch = productsDispatch();

  const add = () => {
    dispatch({
      type: "INCREASE",
    });
  };

  const remove = () => {
    dispatch({
      type: "DECREASE",
    });
  };
  // dispatch({ type: 'INCREASE' })

  return (
    <div>
      <Button onClick={() => add()} color="primary">
        Add Object
      </Button>
      <Button onClick={() => remove()} color="primary">
        Remove Last
      </Button>
      {JSON.stringify(products)}
    </div>
  );
}

export default Admins;
