import React, { useState } from "react";
import SingleReview from "./SingleReview";
import { IoMdArrowDropdown } from "react-icons/io";

const SingleItem = ({ images, price, reviews, title }) => {
  const [show, setShow] = useState(false);

  return (
    <div className="p-5 w-[24%] shadow-2xl rounded-md my-3">
      <img src={images[0]} alt="" />
      <h1>{title}</h1>
      <div className="flex justify-between">
        <p className="2xl">${price}</p>

        <IoMdArrowDropdown
          onClick={() => setShow(!show)}
          className={`text-xl cursor-pointer ${show ? "rotate-180" : ""} transition-all duration-400`}
        />
      </div>
      <div
        className={`${show ? "h-48" : "h-0"} overflow-hidden transition-all duration-300`}
      >
        {reviews.map((item, index) => {
          return <SingleReview {...item} key={index} />;
        })}
      </div>
    </div>
  );
};

export default SingleItem;
