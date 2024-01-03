import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Cookies from "universal-cookie";

function useAuth() {
  const router = useRouter();
  const [validating, setValidating] = useState(true);

  useEffect(() => {
    const cookies = new Cookies();
    const token = cookies.get("gems");

    console.log("===111token=====", !token);

    if (!token) {
      router.replace("/login");
    }
    setValidating(false);
    //  else {
    //   router.replace("/home");
    // }
  }, []);

  return { validating };
}

export default useAuth;
