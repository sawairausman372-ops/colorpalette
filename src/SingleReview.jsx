import React, { useState } from "react";

const SingleReview = ({ reviewerName, reviewerEmail }) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <>
      <div className="flex my-1 gap-3">
        <div className="rounded-full w-10 h-10 bg-green-500"></div>
        <div className="">
          <h3 className="font-semibold">{reviewerName}</h3>
          <p className="text-sm text-gray-500">
            {reviewerEmail.slice(0, readMore ? reviewerEmail.length : 15)}
            ...
            <span
              onClick={() => setReadMore(!readMore)}
              className="text-blue-500 cursor-pointer"
            >
              Read{readMore ? "Less" : "more"}
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default SingleReview;
