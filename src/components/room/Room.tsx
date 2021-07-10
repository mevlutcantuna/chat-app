import React from "react";
import "../../styles/Room.scss";

//components
import SideBar from "./SideBar";
import Chat from "./Chat";
import Navbar from "./Navbar";

const Room: React.FC = () => {
  return (
    <div className="room">
      <Navbar />
      <div className="room__container">
        <div className="room__container__sidebar">
          <SideBar />
        </div>
        <div className="room__container__chat">
          <Chat />
        </div>
      </div>
    </div>
  );
};

export default Room;
