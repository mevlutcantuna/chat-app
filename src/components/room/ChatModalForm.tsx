import React, { useState } from "react";
import "../../styles/ChatModalForm.scss";

//firebase
import { useFirebase } from "react-redux-firebase";
import { useSelector } from "react-redux";

interface IProps {
  closeModal: () => void;
}

const ChatModalForm: React.FC<IProps> = (props) => {
  const firebase = useFirebase();

  const [roomName, setRoomName] = useState<string>("");
  const [desc, setDesc] = useState<string>("");

  // @ts-ignore
  const profile = useSelector((state) => state.firebase.profile);

  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRoomName(e.target.value);
  };

  const handleChangeDesc = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDesc(e.target.value);
  };

  const addRoom = (e: React.FormEvent) => {
    e.preventDefault();
    if (roomName.trim() !== "" && desc.trim() !== "") {
      firebase
        .push("rooms", {
          roomName,
          desc,
          createdBy: {
            name: profile.name,
            avatar: profile.avatar,
          },
        })
        .then((res) => {
          console.log(res);
          setRoomName("");
          setDesc("");
          props.closeModal();
        })
        .catch((err) => console.log(err));
    }
  };
  return (
    <div className="chatModalForm">
      <form onSubmit={addRoom} className="chatModalForm__form">
        <input
          value={roomName}
          onChange={handleChangeName}
          type="text"
          placeholder={"Enter Room Name"}
        />
        <input
          value={desc}
          onChange={handleChangeDesc}
          type="text"
          placeholder="Enter Room Description"
        />
        <button type="submit">Add Room</button>
      </form>
    </div>
  );
};

export default ChatModalForm;
