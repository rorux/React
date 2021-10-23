import { useState, useEffect, useRef } from "react";
import ChatList from "./components/containers/ChatList";
import MessageList from "./components/containers/MessageList";
import MsgInput from "./components/MsgInput";
import "./styles/main.scss";

import { ThemeProvider, createTheme } from "@material-ui/core/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#22254c",
    },
    secondary: {
      main: "#CECECE",
    },
  },
});

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
    <ThemeProvider theme={theme}>
      <div className="wrap">
        <div className="chat-list-wrap">
          <ChatList />
        </div>
        <div className="messages-input-wrap">
          <MessageList messages={messageList}></MessageList>
          <MsgInput submit={addMessage} messageList={messageList} />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
