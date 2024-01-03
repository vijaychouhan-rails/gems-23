import React from "react";
import LayoutPage from "@/components/layout";
import UsersPage from "@/components/usersPage";

function Users() {
  return <UsersPage />;
}

Users.getLayout = function getLayout(page) {
  return <LayoutPage>{page}</LayoutPage>;
};

export default Users;
