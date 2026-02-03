import React, { useState } from "react";
import { lorems } from "./lorems";
import toast from "react-hot-toast";
const Lorem = () => {
  const [number, setNumber] = useState("");
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");
  const generateRandomNumber = () => {
    let random = Math.random() * lorems.length;
    let floor = Math.floor(random);
    return floor;
  };

  const handleLorems = (e) => {
    e.preventDefault();
    if (!number) {
      setError(true);
      setMessage("Please enter a value");
    } else if (number > lorems.length) {
      let moreData = [];
      for (let i = 0; i < number; i++) {
        moreData.push(lorems[generateRandomNumber()]);
      }
      setData(moreData);
    }
  };
  return (
    <>
      <form className="w-1/2 shadow-2xl p-5 rounded-md mx-auto my-10">
        <label htmlFor="" className="text-gray-600">
          Number
        </label>

        <input
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          type="number"
          placeholder="e.g.5"
          className="w-full rounded-md p-3 border border-green-500"
        />
        {error && <p className="text-red-500 font-semibold">{message}</p>}

        <button
          onClick={handleLorems}
          className="bg-green-500 w-full rounded-md p-2 my-2 text-white "
        >
          Generate
        </button>
      </form>

      <div className="container mx-auto text-center">
        {data.map((item, index) => {
          return (
            <p key={index} className="my-2 text-gray-400">
              {item}
            </p>
          );
        })}
      </div>
    </>
  );
};

export default Lorem;
