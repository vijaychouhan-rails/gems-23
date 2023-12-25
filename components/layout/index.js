import React from "react";
import HeaderPage from "./header";
import FooterPage from "./footerPage";

function LayoutPage({ children }) {
  return (
    <>
      <HeaderPage />
      {children}
      <FooterPage />
    </>
  );
}

export default LayoutPage;
