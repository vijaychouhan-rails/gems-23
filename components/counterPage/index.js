import { increment } from "@/reducers/counterSlice";
import React from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";

const CounterPage = ({ page }) => {
  const allData = useSelector((state) => state.counterRedu);
  const dispatch = useDispatch();

  console.log("===allData=====", allData);

  const [count, setCount] = useState(0);

  const handleClick = (num) => {
    dispatch(increment());
  };

  return (
    <center style={{ marginTop: "20px", marginBottom: "20px" }}>
      <Button onClick={() => handleClick(-1)}> - </Button>
      <h2>
        {page} :: {allData.countData}
      </h2>
      <Button onClick={() => handleClick(1)}> + </Button>
    </center>
  );
};

export default CounterPage;
