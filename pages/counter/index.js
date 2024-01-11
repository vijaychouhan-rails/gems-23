import CounterPage from "@/components/counterPage";
import LayoutPage from "@/components/layout";
import React from "react";

const Counter = () => {
  return <CounterPage page="Counter" />;
};

Counter.getLayout = function getLayout(page) {
  return <LayoutPage>{page}</LayoutPage>;
};

export default Counter;
