import React from "react";

import HeaderPage from "./header";
import FooterPage from "./footerPage";
import withSafeRoute from "./withSafeRoute";

function LayoutPage({ children }) {
  // const { validating } = useAuth();
  // console.log("===validating=====", validating);

  // if (validating) {
  //   return "loading...";
  // }

  // console.log("===validating1=====", validating);

  return (
    <>
      <HeaderPage />
      {children}
      <FooterPage />
    </>
  );
}

// export default withSafeRoute(LayoutPage);
export default LayoutPage;
