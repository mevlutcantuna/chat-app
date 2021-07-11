import React, { useState } from "react";
import "../../styles/SideBar.scss";

//assets
import Add from "../../assets/add.png";

//components
import ChatModal from "./ChatModal";
import RoomNames from "./RoomNames";

const SideBar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <span className="sidebar__header__title">Rooms</span>
        <button onClick={openModal} className="sidebar__header__button">
          <img alt="add" src={Add} />
        </button>
      </div>
      <ChatModal
        isOpen={isOpen}
        openModal={openModal}
        closeModal={closeModal}
      />
      <RoomNames />
    </div>
  );
};

export default SideBar;
