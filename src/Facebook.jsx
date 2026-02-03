import React from "react";

const Facebook = () => {
  return (
    <>
      <form className="shadow-2xl p-2 shadow-gray-500 mx-auto rounded-md w-1/2 my-10">
        <h1 className="text-center text-2xl">Create New Account</h1>
        <label htmlFor="" className="text-gray-600">
          FirstName
        </label>
        <input type="text" className="w-full rounded-md border p-2" />
        <label htmlFor="" className="text-gray-600 ">
          LastName
        </label>

        <input type="text" className="w-full rounded-md border p-2" />

        <label htmlFor="" className="text-gray-600 ">
          Number Email
        </label>

        <input type="text" className="w-full rounded-md border p-2" />
        <label htmlFor="" className="text-gray-600 ">
          Password
        </label>

        <input type="text" className="w-full rounded-md border p-2" />
        <div>
          <label>Date of Birth:</label>
          <input
            type="date"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
          />
          <p>Your DOB: {dob}</p>
        </div>
      </form>
    </>
  );
};

export default Facebook;
