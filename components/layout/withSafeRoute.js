import useAuth from "@/utils/hooks/useAuth";
import React, { useEffect } from "react";
import { useRouter } from "next/router";

const withSafeRoute = (WrappedComponent) => {
  const SafeRoute = (props) => {
    const router = useRouter();
    const { validated } = useAuth();

    // useEffect(() => {
    //   // Ensure that this code is only executed on the client side
    //   // console.log("=====window==", window, validated);
    //   if (typeof window !== "undefined") {
    //     // Redirect to login if not authenticated
    //     console.log("===validated===", !validated);
    //     console.log(
    //       "===(validated !== null && !validated)===",
    //       validated !== null && !validated
    //     );
    //     if (validated !== null && !validated) {
    //       router.replace("/login");
    //     }
    //   }
    // }, [validated, router]);

    if (typeof window !== "undefined") {
      // Redirect to login if not authenticated
      // console.log("===validated===", !validated);
      // console.log(
      //   "===(validated !== null && !validated)===",
      //   validated !== null && !validated
      // );
      if (!validated) {
        router.replace("/login");
      }
    }

    // Render the wrapped component with its original props
    return <WrappedComponent {...props} />;
  };

  SafeRoute.displayName = "SafeRoute";

  return SafeRoute;
};

export default withSafeRoute;
