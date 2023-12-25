import Head from "next/head";
import React from "react";
import HeadPage from "../layout/headPage";
import HEAD_TITLES from "@/utils/constants/titleConstants";
import TopSection from "./topSection";
import CounterSections from "./counterSections";
import BecomeAnInstructor from "./becomeAnInstructor";
import ReviewRating from "./reviewRating";

function LandingPage() {
  return (
    <HeadPage title={HEAD_TITLES.home}>
      <main>
        <TopSection />
        <CounterSections />
        <BecomeAnInstructor />
        <ReviewRating />
      </main>
    </HeadPage>
  );
}

export default LandingPage;
