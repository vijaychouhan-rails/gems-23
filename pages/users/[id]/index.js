import LayoutPage from "@/components/layout";
import useAuth from "@/utils/hooks/useAuth";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

function UserShow() {
  const router = useRouter();
  // const { validated } = useAuth();

  return (
    <div>
      <h3>UserShow: {router.query.id}</h3>
    </div>
  );
}

UserShow.getLayout = function getLayout(page) {
  return <LayoutPage>{page}</LayoutPage>;
};

export default UserShow;
