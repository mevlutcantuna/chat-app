import React from "react";
import "../../styles/Chat.scss";
import ChatInputBar from "./ChatInputBar";
import { useSelector } from "react-redux";
import ChatMessages from "./ChatMessages";

const Chat = () => {
  // @ts-ignore
  const currentPage = useSelector((state) => state.CurrentPage.currentPage);
  return (
    <div className="chat">
      <div className="chat__detail">
        <span>{currentPage?.value.roomName}</span>
        <span>{currentPage?.value.desc}</span>
      </div>
      <ChatMessages />
      <ChatInputBar />
    </div>
  );
};

export default Chat;
