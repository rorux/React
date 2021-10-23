import "./style.scss";
import Message from "../../Message";

function MessageList({ messages }) {
  const renderMessages = messages.map((message) => (
    <Message message={message} key={message.id} />
  ));

  return (
    <div id="convo" data-from="Sonu Joshi">
      <ul className="chat-thread">{renderMessages}</ul>
    </div>
  );
}

export default MessageList;
