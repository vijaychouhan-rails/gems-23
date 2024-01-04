import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Cookies from "universal-cookie";

function useAuth() {
  const router = useRouter();

  const canSkip = ["/home", "/"].includes(router.pathname);

  // console.log(
  //   "===user auth canSkip, router.pathname==",
  //   canSkip,
  //   router.pathname
  // );

  const [validated, setValidated] = useState(null);

  // console.log(
  //   "===user auth canSkip, validated, router.pathname==",
  //   canSkip,
  //   validated,
  //   router.pathname
  // );

  useEffect(() => {
    // if (!validated) {
    const cookies = new Cookies();
    const token = cookies.get("gems");

    console.log("===111token=====", !!token);

    setValidated(canSkip || !!token);
    // }
  }, [validated, canSkip]);

  return { validated };
}

export default useAuth;
