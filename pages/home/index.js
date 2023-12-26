import LandingPage from "@/components/landingPage";
import LayoutPage from "@/components/layout";
import React from "react";

function Home() {
  return <LandingPage />;
}

Home.getLayout = function getLayout(page) {
  return <LayoutPage>{page}</LayoutPage>;
};

export default Home;
