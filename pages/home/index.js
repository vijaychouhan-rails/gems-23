import LandingPage from "@/components/landingPage";
import LayoutPage from "@/components/layout";
import React from "react";
import { useSelector } from "react-redux";

function Home() {
  const count = useSelector((state) => state);
  console.log("==========", count);
  return <LandingPage />;
}

Home.getLayout = function getLayout(page) {
  return <LayoutPage>{page}</LayoutPage>;
};

export default Home;
