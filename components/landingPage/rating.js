import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

function Rating({ ratingObj }) {
  return (
    <li className="list-inline-item me-1 small">
      {ratingObj.star === "half" ? (
        <FaStarHalfAlt className="text-warning" />
      ) : (
        <FaStar className="text-warning" />
      )}
    </li>
  );
}

export default Rating;
