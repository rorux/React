import { Button } from "@material-ui/core";
import { styled } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const MyButton = styled(Button)({
  background: "ForestGreen",
  border: 0,
  borderRadius: 3,
  color: "white",
  boxShadow: "none",
  "&:hover": {
    background: "SeaGreen",
    boxShadow: "none",
  },
});

function NoChat() {
  return (
    <div className="wrap-main">
      <h1>Чат не найден..</h1>

      <Link to="/chats">
        <MyButton>Чаты</MyButton>
      </Link>
    </div>
  );
}

export default NoChat;
