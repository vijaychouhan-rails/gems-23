import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CounterPage from "../counterPage";
import { Button } from "react-bootstrap";
import { numIncrement } from "@/reducers/numberSlice";

const NumberPage = () => {
  const dispatch = useDispatch();
  //Props
  //Selector
  //State

  const counterData = useSelector((state) => state.counterRedu);
  const numberData = useSelector((state) => state.numberRedu);

  const handleClick = (num) => {
    dispatch(numIncrement(num));
  };

  useEffect(() => {
    handleClick(counterData.countData);
  }, [counterData]);

  console.log("====number page counterData===");

  return (
    <>
      <CounterPage page="Number page" />
      <hr />
      <center style={{ marginTop: "20px", marginBottom: "20px" }}>
        <Button onClick={() => handleClick(counterData.countData)}>
          <h2>{numberData.numData}</h2>
        </Button>
      </center>
    </>
  );
};

export default NumberPage;
