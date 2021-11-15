import { useEffect, useState } from "react";
import { Redirect, useParams } from "react-router-dom";
import ChatList from "../../components/ChatList";
import MessageList from "../../components/MessageList";
import MessageInput from "../../components/MessageInput";
import AddChatModal from "../../components/AddChatModal";
import Header from "../../components/Header";
import { BlueButton } from "../../components/Buttons";
import { ROUTES } from "../../router/constants";
import { useSelector, useDispatch } from "react-redux";
import { profileSelector } from "../../store/profile/selectors";
import { chatListSelector } from "../../store/chats/selectors";
import { initChats } from "../../store/chats/actions";

function Chats() {
  const [openModal, setOpenModal] = useState(false);
  const { userName } = useSelector(profileSelector);
  const { chatList } = useSelector(chatListSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initChats());
  }, [dispatch]);

  const { chatId } = useParams();
  const isChatExists = chatList[chatId];

  const handleClickOpen = () => {
    setOpenModal(true);
  };

  const handleClose = () => {
    setOpenModal(false);
  };

  // есть GET-параметр id чата, но чата не существует
  if (chatId && !isChatExists) {
    return <Redirect to={ROUTES.NOCHAT} />;
  }

  // нет GET-параметра id чата
  if (!chatId) {
    // если есть чаты в базе данных
    if (Object.keys(chatList).length) {
      return <Redirect to={ROUTES.CHATS + "/" + Object.keys(chatList)[0]} />;
    }
    // если нет чатов в базе данных
    return (
      <div>
        <Header />
        <div className="wrap">
          <div className="chat-list-wrap">
            <AddChatModal openModal={openModal} handleClose={handleClose} />
            <h3 className="welcome">Привет, {userName}!</h3>
            <BlueButton fullWidth onClick={handleClickOpen}>
              Добавить первый чат
            </BlueButton>
          </div>
        </div>
      </div>
    );
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
          <MessageList chatId={chatId} />
          <MessageInput chatId={chatId} />
        </div>
      </div>
    </div>
  );
}

export default Chats;
