import "./style.scss";
import Message from "../Message";

function MessageList({ messageList }) {
  return (
    <div id="convo" data-from="Sonu Joshi">
      <ul className="chat-thread">
        {messageList.map((message) => (
          <Message message={message} key={message.messageId} />
        ))}
      </ul>
    </div>
  );
}

export default MessageList;
