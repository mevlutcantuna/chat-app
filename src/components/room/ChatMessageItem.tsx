import React, { useEffect } from "react";
import "../../styles/ChatMessageItem.scss";

import { MessageTypes } from "../../types/MessageTypes";

interface IProps {
  item: MessageTypes;
}

const ChatMessageItem: React.FC<IProps> = (props) => {
  const { item } = props;

  const mainDivRef = React.useRef<HTMLDivElement | null>(null);

  const timeSince = (timeStamp: number) => {
    let now = new Date(),
      secondsPast = (now.getTime() - timeStamp) / 1000;
    if (secondsPast < 60) {
      // @ts-ignore
      return parseInt(secondsPast) + "s";
    }
    if (secondsPast < 3600) {
      // @ts-ignore
      return parseInt(secondsPast / 60) + "m";
    }
    if (secondsPast <= 86400) {
      // @ts-ignore
      return parseInt(secondsPast / 3600) + "h";
    }
    if (secondsPast > 86400) {
      // @ts-ignore
      let day = timeStamp.getDate();
      // @ts-ignore
      let month = timeStamp
        // @ts-ignore
        .toDateString()
        .match(/ [a-zA-Z]*/)[0]
        .replace(" ", "");
      // @ts-ignore
      let year =
        // @ts-ignore
        timeStamp.getFullYear() === now.getFullYear()
          ? ""
          : // @ts-ignore
            " " + timeStamp.getFullYear();
      return day + " " + month + year;
    }
  };

  useEffect(() => {
    //auto scroll to bottom of messages
    if (mainDivRef.current !== undefined) {
      mainDivRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <div className="chatMessageItem" ref={mainDivRef}>
      <div className="chatMessageItem__left">
        <img alt={"avatar"} src={item.value.user.avatar} />
        <span>{item.value.content}</span>
      </div>
      <div className="chatMessageItem__right">
        {timeSince(item.value.timestamp) + " ago"}
      </div>
    </div>
  );
};

export default ChatMessageItem;
