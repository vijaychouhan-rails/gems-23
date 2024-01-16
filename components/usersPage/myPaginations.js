import { current } from "@reduxjs/toolkit";
import React from "react";
import Pagination from "react-bootstrap/Pagination";

function MyPagination(props) {
  const { totalPages, currentPage } = props;

  let items = [];
  for (let number = 1; number <= totalPages; number++) {
    items.push(
      <Pagination.Item key={number} active={number === currentPage}>
        {number}
      </Pagination.Item>
    );
  }

  return <Pagination>{items}</Pagination>;
}

export default MyPagination;
