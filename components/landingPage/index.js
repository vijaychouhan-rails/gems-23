import Head from "next/head";
import React from "react";
import HeadPage from "../layout/headPage";
import HEAD_TITLES from "@/utils/constants/titleConstants";
import TopSection from "./topSection";

function LandingPage() {
  return (
    <HeadPage title={HEAD_TITLES.home}>
      <main>
        <TopSection />
      </main>
    </HeadPage>
  );
}

export default LandingPage;
