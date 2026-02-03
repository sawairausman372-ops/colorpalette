import React from "react";
import { FaTrash } from "react-icons/fa";

const SingleItems = ({ name, id, remove }) => {
  return (
    <div className="p-3 flex justify-between items-center shadow-2xl shadow-cyan-300 my-2 border border-cyan-500 rounded-md">
      {name}
      <FaTrash
        onClick={() => remove(id)}
        className="text-red-500 cursor-pointer"
      />
    </div>
  );
};

export default SingleItems;
