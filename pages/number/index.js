import CounterPage from "@/components/counterPage";
import LayoutPage from "@/components/layout";
import React from "react";

const Number = () => {
  return <CounterPage page="Number" />;
};

Number.getLayout = function getLayout(page) {
  return <LayoutPage>{page}</LayoutPage>;
};

export default Number;
