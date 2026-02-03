import React, { useState } from "react";
import toast from "react-hot-toast";
import SingleItems from "./SingleItems";
const Inputs = () => {
  const [name, setName] = useState();
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);
  const handleClick = (e) => {
    e.preventDefault();
    if (!name) {
      setError(true);
      toast.error("Please enter a value");
    } else {
      setError(false);

      setData([...data, { name, id: Date.now() }]);
      console.log(name);
    }

    setName("");
    setTimeout(() => {
      setError(false);
    }, 5000);
  };

  const removeSingle = (id) => {
    let newTodos = data.filter((item, index) => {
      return item.id !== id;
    });
    setData(newTodos);
  };

  return (
    <>
      <form action="" className="w-1/2 p-5 shadow-2xl mx-auto rounded-md my-10">
        <label htmlFor="name" className="text-gray-800">
          ToDO
        </label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          name="name"
          id="name"
          className="w-full border border-gray-300 p-2 my-3 rounded-md
             focus:border-cyan-500 outline-0"
          placeholder="Enter your name..."
        />
        {error && (
          <p className="text-red-500 font-semibold text-sm mb-2">
            Please enter a todo
          </p>
        )}
        <button
          onClick={handleClick}
          className="w-full bg-cyan-600 p-2 rounded-md text-white font-semibold active:scale-95"
        >
          Add Data
        </button>
      </form>

      <div className="container grid grid-cols-3 gap-4 mx-auto">
        {data.map((item, index) => {
          return <SingleItems remove={removeSingle} {...item} key={index} />;
        })}
      </div>
    </>
  );
};

export default Inputs;
