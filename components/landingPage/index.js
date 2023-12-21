import Head from "next/head";
import React from "react";
import HeadPage from "../layout/headPage";
import HEAD_TITLES from "@/utils/constants/titleConstants";

function LandingPage() {
  return (
    <HeadPage title={HEAD_TITLES.home}>
      <div>This is the landing page of the website</div>
    </HeadPage>
  );
}

export default LandingPage;
