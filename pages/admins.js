import React, { useContext } from "react";
import { productsStore, productsDispatch } from "../store/store";
import Button from "@material-ui/core/Button";

function Admins() {


  const products = productsStore();
  const dispatch = productsDispatch();

  const addNumber = () => {
    console.log("toindo");
    dispatch({
      type: "INCREASE",
    });
  };
  // dispatch({ type: 'ADD_NUMBER' })

  return (
    <div>
      <Button onClick={() => addNumber()} color="primary">
        Add 10
      </Button>
      {JSON.stringify(products)}
    </div>
  );
}

export default Admins;
