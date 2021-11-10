import { useState } from "react";
import { Redirect, useParams } from "react-router-dom";
import ChatList from "../../components/ChatList";
import MessageList from "../../components/MessageList";
import MessageInput from "../../components/MessageInput";
import AddChatModal from "../../components/AddChatModal";
import Header from "../../components/Header";
import { BlueButton } from "../../components/Buttons";
import { ROUTES } from "../../router/constants";
import { useSelector } from "react-redux";
import { profileSelector } from "../../store/profile/selectors";
import { chatListSelector } from "../../store/chats/selectors";
import { messagesSelector } from "../../store/messages/selectors";

function Chats() {
  const [openModal, setOpenModal] = useState(false);
  const { userName } = useSelector(profileSelector);
  const { chatList } = useSelector(chatListSelector);
  const { messageList } = useSelector(messagesSelector);

  const { chatId } = useParams();
  const isChatExists = chatList[chatId];

  const handleClickOpen = () => {
    setOpenModal(true);
  };

  const handleClose = () => {
    setOpenModal(false);
  };

  if (chatId && !isChatExists) {
    return <Redirect to={ROUTES.NOCHAT} />;
  }

  if (!chatId) {
    return <Redirect to={ROUTES.CHATS + "/" + Object.keys(chatList)[0]} />;
  }

  return (
    <div>
      <Header />
      <div className="wrap">
        <div className="chat-list-wrap">
          <AddChatModal openModal={openModal} handleClose={handleClose} />
          <h3 className="welcome">Привет, {userName}!</h3>
          <ChatList chatList={chatList} />
          <BlueButton fullWidth onClick={handleClickOpen}>
            Добавить чат
          </BlueButton>
        </div>
        <div className="messages-input-wrap">
          <MessageList messageList={messageList[chatId]}></MessageList>
          <MessageInput messageList={messageList[chatId]} chatId={chatId} />
        </div>
      </div>
    </div>
  );
}

export default Chats;
