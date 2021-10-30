import "./style.scss";
import Message from "../Message";

function MessageList({ messages }) {
  return (
    <div id="convo" data-from="Sonu Joshi">
      <ul className="chat-thread">
        {messages.map((message) => (
          <Message message={message} key={message.id} />
        ))}
      </ul>
    </div>
  );
}

export default MessageList;
