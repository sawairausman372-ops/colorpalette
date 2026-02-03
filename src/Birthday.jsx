import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";
import SingleCard from "./SingleCard";
import { bdays } from "./bdays";
import { IoMdRefresh } from "react-icons/io";

const Birthday = () => {
  const [show, setshow] = useState(false);
  const [data, setData] = useState(bdays);

  const handleRemove = () => {
    if (data.length > 0) {
      setData([]);
    } else {
      setData(bdays);
    }
  };
  const removeSingle = (id) => {
    let newBdays = data.filter((item, index) => {
      return item.id !== id;
    });
    setData(newBdays);
  };

  return (
    <>
      <div className="p-2 shadow-xl my-10 shadow-gray-300 rounded-md xl:w-1/2 md:w-2/3 sm:-[90%] mx-auto">
        <h1 className="text-center text-4xl">{data.length} Birthdays today</h1>
        {data.slice(0, show ? bdays.length : 5).map((item, index) => {
          return <SingleCard remove={removeSingle} {...item} key={item.id} />;
        })}
        <button
          onClick={() => setshow(!show)}
          className="text-blue-500 ms-auto block my-2 cursor-poninter font-semibold"
        >
          {show ? "Show Less" : "Show More"}
        </button>
        <button
          onClick={data.length > 0 ? () => setData([]) : () => setData(bdays)}
          className={` ${data.length == 0 ? "bg-green-500" : "bg-red-500"}
            
            gap-2 flex items-center w-full justify-center text-white rounded-md p-3`}
        >
          {data.length == 0 ? (
            <>
              <IoMdRefresh />
              Refresh All
            </>
          ) : (
            <>
              <FaTrash />
              Remove All
            </>
          )}
        </button>
      </div>
    </>
  );
};

export default Birthday;
