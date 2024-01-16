import { increment, customOperation } from "@/reducers/counterSlice";
import React from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";

const CounterPage = ({ page }) => {
  const allData = useSelector((state) => state.counterRedu);
  const dispatch = useDispatch();

  console.log("===Counter Page data=====", allData);

  const handleClick = (num) => {
    dispatch(increment());
  };

  const handleDynamic = (num) => {
    dispatch(customOperation(num));
  };

  const ranNum = 1000;

  return (
    <center style={{ marginTop: "20px", marginBottom: "20px" }}>
      <Button onClick={() => handleClick(-1)}> - </Button>
      <h2>
        {page} :: {allData.countData}
      </h2>
      <Button onClick={() => handleClick(1)}> + </Button>

      <Button onClick={() => handleDynamic(ranNum)}> Custom({ranNum}) </Button>
    </center>
  );
};

export default CounterPage;
