import { useState, useRef, useEffect, useCallback } from "react";
import { TextField, useTheme } from "@material-ui/core";
import { SendOutlined } from "@material-ui/icons";
import { GreenButton } from "../Buttons";
import { useSelector, useDispatch } from "react-redux";
import { profileSelector } from "../../store/profile/selectors";
import { addMessageActionWithThunk } from "../../store/messages/actions";
import "./style.scss";

function MessageInput({ messageList, chatId }) {
  const [text, setText] = useState("");
  const { userName } = useSelector(profileSelector);
  const dispatch = useDispatch();

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

  const sendMessage = useCallback(() => {
    dispatch(
      addMessageActionWithThunk({
        chatId: chatId,
        author: userName,
        text: text,
      })
    );
    setText("");
  }, [chatId, userName, text, dispatch]);

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
