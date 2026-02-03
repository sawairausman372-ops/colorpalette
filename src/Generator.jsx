import React, { useState } from "react";
import Values from "values.js";
import SingleColor from "./SingleColor";
const Generator = () => {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [colorError, setColorError] = useState(false);
  const [list, setList] = useState([]);

  const handleColor = (e) => {
    e.preventDefault();
    if (!color) {
      setError(true);
    } else {
      setError(false);
      try {
        setColorError(false);
        const rang = new Values(color).all(10);
        setList(rang);
      } catch (error) {
        setColorError(true);
      }
    }
  };

  return (
    <>
      <h1 className="text-5xl my-5 font-bold text-center text-cyan-500">
        Color Palette 🎨
      </h1>

      <form
        action=""
        className="w-[90%] md:w-1/2 bg-white rounded-md shadow-2xl mx-auto my-10 p-6"
      >
        <h1>Color Generator</h1>

        <input
          value={color}
          onChange={(e) => setColor(e.target.value)}
          placeholder="e.g"
          type="text"
          className={`w-full rounded-md border outline-0 focus:border-cyan-500 ${colorError ? "border-red-500 border-2" : "border-gray-200"} p-2 my-2`}
        />
        {error && (
          <p className="text-red-500 font-semibold">Please enter a value</p>
        )}
        <button
          onClick={handleColor}
          className="bg-cyan-500 focus:border-cyan-500 text-white p-2 rounded-md w-full"
        >
          Generate
        </button>
      </form>
      <div className="container mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {" "}
        {list?.map((item, index) => {
          return (
            <SingleColor index={index} {...item} hex={item.hex} key={index} />
          );
        })}{" "}
      </div>
    </>
  );
};

export default Generator;
