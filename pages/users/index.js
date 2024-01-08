import React, { useEffect } from "react";
import LayoutPage from "@/components/layout";
import UsersPage from "@/components/usersPage";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import useAuth from "@/utils/hooks/useAuth";
import withSafeRoute from "@/components/layout/withSafeRoute";

function Users() {
  const router = useRouter();
  // const { validated } = useAuth();
  const validated = true;

  // useEffect(() => {
  //   if (!validated) {
  //     router.replace("/login");
  //   }
  // }, [validated]);

  if (validated) {
    return <UsersPage />;
  }
}

Users.getLayout = function getLayout(page) {
  return <LayoutPage>{page}</LayoutPage>;
};

export default withSafeRoute(Users);
