import { useState } from "react";
import { Link, Redirect, useParams } from "react-router-dom";
import ChatList from "../../components/ChatList";
import MessageList from "../../components/MessageList";
import MessageInput from "../../components/MessageInput";
import { ROUTES } from "../../router/constants";

function Chats({ chatList, setChatList }) {
  const [messageList, setMessageList] = useState([]);

  const { chatId } = useParams();
  const isChatExists = chatList[chatId];

  if (chatId && !isChatExists) {
    return <Redirect to={ROUTES.NOCHAT} />;
  }

  const addMessage = (message) => {
    setMessageList([...messageList, message]);
  };

  /* const isMounted = useRef(false);

  useEffect(() => {
    if (isMounted.current) {
      const lastMessage = messageList[messageList.length - 1];
      if (lastMessage.author !== "Bot") {
        const deferredBot = setTimeout(
          () =>
            setMessageList([
              ...messageList,
              {
                id: Date.now(),
                author: "Bot",
                text: "Hello! I'm Bot",
              },
            ]),
          1500
        );
        return () => clearTimeout(deferredBot);
      }
    } else {
      isMounted.current = true;
    }
  }, [messageList]); */

  return (
    <div>
      <header className="header">
        <Link to="/">Главная</Link>
        <Link to="/profile">Профиль</Link>
        <Link to="/chats">Чаты</Link>
      </header>
      <div className="wrap">
        <div className="chat-list-wrap">
          <ChatList chatList={chatList} setChatList={setChatList} />
        </div>
        <div className="messages-input-wrap">
          <MessageList messages={messageList}></MessageList>
          <MessageInput submit={addMessage} messageList={messageList} />
        </div>
      </div>
    </div>
  );
}

export default Chats;
