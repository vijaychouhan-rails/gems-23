import React from "react";
import LoginComponent from "@/components/login";
import NoAuthLayout from "@/components/noAuthLayout";

function Login() {
  return <LoginComponent />;
}

// Login.getLayout = function getLayout(page) {
//   return <NoAuthLayout>{page}</NoAuthLayout>;
// };

export default Login;
