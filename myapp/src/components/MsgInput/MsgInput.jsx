import { useState } from "react";
import "./style.scss";

function MsgInput({ submit }) {
  const [textInput, setTextInput] = useState("");

  const handleChange = (event) => {
    if (event.keyCode !== 13) {
      setTextInput(event.target.value);
    } else {
      sendMessage();
    }
  };

  const sendMessage = () => {
    if (textInput) {
      submit({
        id: Date.now(),
        author: "Jack",
        text: textInput,
      });
      setTextInput("");
    }
  };

  return (
    <div className="chat-input">
      <input
        type="text"
        className="chat-input__message"
        placeholder="Введите сообщение.."
        value={textInput}
        onChange={handleChange}
        onKeyUp={handleChange}
      />
      <button className="chat-input__send" onClick={sendMessage}>
        Send
      </button>
    </div>
  );
}

export default MsgInput;
