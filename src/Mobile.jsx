import React from "react";
import Chat from "./Chat";
import { chats } from "./chats";

const Mobile = () => {
  return (
    <>
      <div class="w-1/4 shadow-xl rounded-md p-5 mx-auto my-10 shadow-gray-900">
        <h1 class="text-xl font-semibold text-green-600">WhatsApp</h1>
        {chats.map((item, index) => {
          return <Chat {...item} />;
        })}
      </div>
    </>
  );
};

export default Mobile;
