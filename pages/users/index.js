import React from "react";
import LayoutPage from "@/components/layout";
import UsersPage from "@/components/usersPage";
import useAuth from "@/utils/hooks/useAuth";

function Users() {
  const { validating } = useAuth();
  console.log("===a=====", validating);
  if (validating) {
    return "loading...";
  }
  return <UsersPage />;
}

Users.getLayout = function getLayout(page) {
  return <LayoutPage>{page}</LayoutPage>;
};

export default Users;
