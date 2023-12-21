import Head from "next/head";
import React from "react";

function HeadPage({ children, title }) {
  return (
    <>
      <Head>
        <title>{title || "Gems-23"}</title>
      </Head>
      {children}
    </>
  );
}

export default HeadPage;
