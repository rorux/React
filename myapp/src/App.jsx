import { useState, useEffect, useRef } from "react";
import MessageList from "./components/containers/MessageList";

function App() {
  const [messageList, setMessageList] = useState([]);

  const addMessage = (message) => {
    setMessageList([...messageList, message]);
  };

  const isMounted = useRef(false);

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
  }, [messageList]);

  return (
    <MessageList messages={messageList} newMessage={addMessage}></MessageList>
  );
}

export default App;
