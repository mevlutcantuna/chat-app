import React, { useEffect } from "react";
import "../../styles/ChatMessageItem.scss";

import { MessageTypes } from "../../types/MessageTypes";

interface IProps {
  item: MessageTypes;
}

const ChatMessageItem: React.FC<IProps> = (props) => {
  const { item } = props;

  const mainDivRef = React.useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    //auto scroll to bottom of messages
    if (mainDivRef.current !== undefined) {
      mainDivRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  console.log(item.value);

  return (
    <div className="chatMessageItem" ref={mainDivRef}>
      <div className="chatMessageItem__left">
        <img alt={"avatar"} src={item.value.user.avatar} />
        <span>{item.value.content}</span>
      </div>
    </div>
  );
};

export default ChatMessageItem;
