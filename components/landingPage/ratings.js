import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import Rating from "./rating";

function Ratings({ stars }) {
  const ratingsArr = () => {
    const arr = [];

    for (let num = 0; num < Math.ceil(stars); num++) {
      if (stars - num < 1) {
        arr.push({
          star: "half",
        });
      } else {
        arr.push({
          star: "full",
        });
      }
    }
    return arr;
  };

  return (
    <ul className="list-inline mb-2">
      {ratingsArr().map((ratingObj, index) => {
        return <Rating key={`rating-${index}`} ratingObj={ratingObj} />;
      })}
    </ul>
  );
}

export default Ratings;
