import React, { useState } from "react";
import "../../styles/ChatInputBar.scss";
import { useFirebase } from "react-redux-firebase";
import { useSelector } from "react-redux";

const ChatInputBar = () => {
  const [content, setContent] = useState<string>("");
  const firebase = useFirebase();

  // @ts-ignore
  const userID = useSelector((state) => state.firebase.auth.uid);
  // @ts-ignore
  const profile = useSelector((state) => state.firebase.profile);

  // @ts-ignore
  const currentPage = useSelector((state) => state.CurrentPage.currentPage);
  //console.log(currentPage);

  const handleChangeContent = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };

  const sendMessage = (e: React.FormEvent) => {
    e.preventDefault();

    if (content.trim() !== "") {
      const message = {
        content,
        timestamp: firebase.database.ServerValue.TIMESTAMP,
        user: {
          id: userID,
          name: profile.name,
          avatar: profile.avatar,
        },
      };

      firebase
        .push(`messages/${currentPage.key}`, message)
        .then((res) => {
          setContent("");
          //console.log("message sent");
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="chatInputBar">
      <form onSubmit={sendMessage}>
        <input
          value={content}
          onChange={handleChangeContent}
          className="chatInputBar__input"
          placeholder="Enter your Messages"
        />
      </form>
    </div>
  );
};

export default ChatInputBar;
