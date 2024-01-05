import React, { useEffect } from "react";
import LayoutPage from "@/components/layout";
import UsersPage from "@/components/usersPage";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import useAuth from "@/utils/hooks/useAuth";

function Users() {
  const router = useRouter();
  const { validated } = useAuth();

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

export default Users;
