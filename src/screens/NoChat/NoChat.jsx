import { useSelector } from "react-redux";
import ChatList from "../../components/ChatList";
import { chatListSelector } from "../../store/chats/selectors";

function NoChat() {
  const { chatList } = useSelector(chatListSelector);
  return (
    <div className="wrap-main">
      <h1>Чат не найден..</h1>
      {!!Object.keys(chatList).length && (
        <div className="chat-list-wrap">
          <ChatList chatList={chatList} />
        </div>
      )}
    </div>
  );
}

export default NoChat;
