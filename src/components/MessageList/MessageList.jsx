import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { messagesSelector } from "../../store/messages/selectors";
import { initMessageTracking } from "../../store/messages/actions";
import Message from "../Message";
import "./style.scss";

function MessageList({ chatId }) {
  const { messageList } = useSelector(messagesSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initMessageTracking());
  }, [dispatch]);

  return (
    <div id="convo" data-from="Sonu Joshi">
      <ul className="chat-thread">
        {!!messageList[chatId] &&
          messageList[chatId].map((message) => (
            <Message message={message} key={message.messageId} />
          ))}
      </ul>
    </div>
  );
}

export default MessageList;
