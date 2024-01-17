import React from "react";
import { Button } from "react-bootstrap";

function NextButton({ totalPages, getUsersData, currentPage }) {
  const handleClick = () => {
    getUsersData({ page: currentPage + 1 });
  };

  if (totalPages <= currentPage) {
    return null;
  }

  return (
    <center style={{ marginTop: "10px" }}>
      <Button onClick={handleClick}>Load More</Button>
    </center>
  );
}

export default NextButton;
