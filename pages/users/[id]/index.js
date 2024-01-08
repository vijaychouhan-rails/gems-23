import LayoutPage from "@/components/layout";
import React from "react";

function UserShow() {
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
