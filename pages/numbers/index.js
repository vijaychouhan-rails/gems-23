import LayoutPage from "@/components/layout";
import { decrement, increment } from "@/reducers/counterSlice";
import React from "react";
import { Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";

export default function Numbers() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <Button onClick={() => dispatch(decrement())}> - </Button>
      <h3>Number: {count}</h3>
      <Button onClick={() => dispatch(increment())}> + </Button>
    </div>
  );
}

Numbers.getLayout = function getLayout(page) {
  return <LayoutPage>{page}</LayoutPage>;
};
