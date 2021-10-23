import { useState, useRef, useEffect } from "react";
import { TextField, Button, useTheme } from "@material-ui/core";
import { styled } from "@material-ui/core/styles";
import "./style.scss";
import { SendOutlined } from "@material-ui/icons";

const MyButton = styled(Button)({
  background: "ForestGreen",
  border: 0,
  borderRadius: 3,
  color: "white",
  marginLeft: 10,
  marginRight: 5,
  paddingLeft: -15,
  boxShadow: "none",
  "&:hover": {
    background: "SeaGreen",
    boxShadow: "none",
  },
});

function MsgInput({ submit, messageList }) {
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
      <MyButton
        variant="contained"
        size="small"
        endIcon={<SendOutlined />}
        onClick={sendMessage}
        disabled={!text}
      ></MyButton>
    </div>
  );
}

export default MsgInput;
