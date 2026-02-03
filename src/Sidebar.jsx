import React, { useState } from "react";

const Sidebar = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <button
        onClick={() => setShow(!show)}
        className={`${show ? "bg-red-500" : "bg-yellow-500"} p-2 text-white block m-5`}
      >
        {show ? "Close Sidebar" : "Open Sidebar"}
      </button>

      <div
        className={`min-h-screen w-1/3 bg-green-500 fixed top-0 right-0
        transform transition-all duration-300
        ${show ? "" : "translate-x-full"}`}
      ></div>
    </>
  );
};

export default Sidebar;
