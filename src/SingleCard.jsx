import React from "react";
import { FaTrash } from "react-icons/fa";

const SingleCard = ({ id, name, age, image, remove }) => {
  return (
    <>
      <div className="w-full p-5 flex justify-between items-center rounded-md shadow-xl">
        <div className="flex gap-3 items-center">
          <img
            src={image}
            className="rounded-full w-10 h-10 object-cover"
            alt=""
          />
          <div className="">
            <h1 className="text-xl">{name}</h1>
            <p className="text-gray-500">{age}age years old</p>
          </div>
        </div>
        <button
          onClick={() => remove(id)}
          className="bg-red-500 text-white rounded-md p-3"
        >
          <FaTrash />
        </button>
      </div>
    </>
  );
};

export default SingleCard;
