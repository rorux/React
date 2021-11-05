import { useState } from "react";
import { Redirect, useParams } from "react-router-dom";
import ChatList from "../../components/ChatList";
import MessageList from "../../components/MessageList";
import MessageInput from "../../components/MessageInput";
import Modal from "../../components/Modal";
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
  let { messageList } = useSelector(messagesSelector);

  let { chatId } = useParams();
  const isChatExists = chatList[chatId];

  if (chatId && !isChatExists) {
    return <Redirect to={ROUTES.NOCHAT} />;
  }

  if (!chatId) {
    chatId = Object.keys(chatList)[0];
  }

  messageList = messageList[chatId] ?? [];

  /* const isMounted = useRef(false);
  useEffect(() => {
    if (isMounted.current) {
      const lastMessage = messageList[messageList.length - 1];
      if (lastMessage.author !== "Bot") {
        const deferredBot = setTimeout(
          () =>
            dispatch(
              addMessageAction({
                chatId: chatId,
                author: "Bot",
                text: "Hello! I'm Bot",
              })
            ),
          1500
        );
        return () => clearTimeout(deferredBot);
      }
    } else {
      isMounted.current = true;
    }
  }, [messageList, dispatch, chatId]); */

  const handleClickOpen = () => {
    setOpenModal(true);
  };

  const handleClose = () => {
    setOpenModal(false);
  };

  return (
    <div>
      <Header />
      <div className="wrap">
        <div className="chat-list-wrap">
          <Modal openModal={openModal} handleClose={handleClose} />
          <h3 className="welcome">Привет, {userName}!</h3>
          <ChatList chatList={chatList} />
          <BlueButton fullWidth onClick={handleClickOpen}>
            Добавить чат
          </BlueButton>
        </div>
        <div className="messages-input-wrap">
          <MessageList messageList={messageList}></MessageList>
          <MessageInput messageList={messageList} chatId={chatId} />
        </div>
      </div>
    </div>
  );
}

export default Chats;
