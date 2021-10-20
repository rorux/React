import "./style.scss";
import MsgInput from "../../MsgInput";
import Message from "../../Message";

function MessageList({ messages, newMessage }) {
  const renderMessages = messages.map((mes) => (
    <Message message={mes} key={mes.id} />
  ));

  return (
    <div>
      <div id="convo" data-from="Sonu Joshi">
        <ul className="chat-thread">{renderMessages}</ul>
      </div>
      <MsgInput submit={newMessage} />
    </div>
  );
}

export default MessageList;
