import React from "react";
const Chat = ({ id, name, image, message, messageCount, time }) => {
  return (
    <>
      <div className="flex my-2 shadow p-3 justify-between items-center">
        <div class="flex gap-3 items-center">
          <img src={image} className="w-10 h-10 rounded-full" alt="" />
          <div className="">
            <h4 className="font-semibold">{name}</h4>
            <p className="text-gray-500">{message}</p>
          </div>
        </div>
        <div className="flex items-end flex-col">
          <p className="text-sm text-green-700 font-semibold">{time}</p>
          <p className="w-5 h-5 font-bold flex justify-center items-center rounded-full bg-green-500 text-sm text-white">
            {messageCount}
          </p>
        </div>
      </div>
    </>
  );
};

export default Chat;
