import { useState, useRef, useEffect } from "react";
import { TextField, useTheme } from "@material-ui/core";
import { SendOutlined } from "@material-ui/icons";
import { GreenButton } from "../Buttons";
import "./style.scss";

function MessageInput({ submit, messageList }) {
  const [text, setText] = useState("");

  const theme = useTheme();

  const ref = useRef(undefined);
  useEffect(() => {
    ref.current?.focus();
  }, [messageList]);

  const handleChange = (event) => {
    if (event.keyCode !== 13) {
      setText(event.target.value);
    } else {
      sendMessage();
    }
  };

  const sendMessage = () => {
    if (text) {
      submit({
        id: Date.now(),
        author: "Jack",
        text: text,
      });
      setText("");
    }
  };

  return (
    <div className="chat-input">
      <TextField
        id="outlined-basic"
        size="small"
        fullWidth
        label="Введите сообщение.."
        variant="outlined"
        onChange={handleChange}
        onKeyUp={handleChange}
        value={text}
        style={{
          backgroundColor: theme.palette.secondary.main,
          borderRadius: "5px",
        }}
        inputRef={ref}
      />
      <GreenButton
        variant="contained"
        size="small"
        endIcon={<SendOutlined />}
        onClick={sendMessage}
        disabled={!text}
        style={{ marginLeft: 10, marginRight: 8 }}
      ></GreenButton>
    </div>
  );
}

export default MessageInput;
