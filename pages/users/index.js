import React, { useEffect } from "react";
import LayoutPage from "@/components/layout";
import UsersPage from "@/components/usersPage";
import Cookies from "universal-cookie";
import { useRouter } from "next/router";

const cookies = new Cookies();

function Users() {
  const router = useRouter();

  useEffect(() => {
    const token = cookies.get("gems23");
    if (!token) {
      router.replace("/login");
    }
  }, []);

  return <UsersPage />;
}

Users.getLayout = function getLayout(page) {
  return <LayoutPage>{page}</LayoutPage>;
};

export default Users;
