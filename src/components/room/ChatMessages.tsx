import React from "react";
import "../../styles/ChatMessages.scss";

//firebase - redux
import { useSelector } from "react-redux";
import { useFirebaseConnect, isLoaded, isEmpty } from "react-redux-firebase";

//types
import { MessageTypes } from "../../types/MessageTypes";
import ChatMessageItem from "./ChatMessageItem";

const ChatMessages: React.FC = () => {
  // @ts-ignore
  const currentPage = useSelector((state) => state.CurrentPage?.currentPage);

  useFirebaseConnect([{ path: `messages/${currentPage?.key}` }]);

  // @ts-ignore
  const messages = useSelector((state) => state.firebase.ordered.messages);

  if (!isLoaded(messages)) {
    return <div className="chatMessages"> Loading </div>;
  }
  if (isEmpty(messages)) {
    return <div className="chatMessages">No Message</div>;
  }

  const message = messages[currentPage.key];

  return (
    <div className="chatMessages">
      {message?.map((item: MessageTypes) => (
        <ChatMessageItem key={item.key} item={item} />
      ))}
    </div>
  );
};

export default ChatMessages;
