import CounterPage from "@/components/counterPage";
import LayoutPage from "@/components/layout";
import NumberPage from "@/components/numberPage";
import React from "react";

const Number = () => {
  return <NumberPage />;
};

Number.getLayout = function getLayout(page) {
  return <LayoutPage>{page}</LayoutPage>;
};

export default Number;
