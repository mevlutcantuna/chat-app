import React from "react";
import "../../styles/ChatModal.scss";

//react modal
import Modal from "react-modal";
//assets
import Close from "../../assets/close.png";
import ChatModalForm from "./ChatModalForm";

//modal-styles
const customStyles = {
  content: {
    width: "20rem",
    top: "40%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

//add modal root of app
Modal.setAppElement("#root");

interface IProps {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const ChatModal: React.FC<IProps> = (props) => {
  const { isOpen, openModal, closeModal } = props;

  return (
    <Modal
      isOpen={isOpen}
      onAfterOpen={openModal}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <div className="chatModal__close">
        <button onClick={closeModal}>
          <img alt="close" src={Close} />
        </button>
      </div>
      <ChatModalForm closeModal={closeModal} />
    </Modal>
  );
};

export default ChatModal;
